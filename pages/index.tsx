import Head from 'next/head'
import { useState } from 'react'
import useSWR from "swr"
import { ReactImageMosaic } from 'react-image-mosaic'
import { blob } from 'stream/consumers';



export default function Home() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [targetLink, setTargetLink] = useState();
  const playlistREGEX = /.*playlist\//i;
  const playlistURL = "https://spotify23.p.rapidapi.com/playlist_tracks/?id=" + playlistLink;
  const options = {
	  method: 'GET',
	  headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST
	  }
  };
  const fetcher = (url: string, ...args) => fetch(url, ...args).then(res => res.json()).then(res => { return res.tracks.items.map(track => track.track.album.images[0].url) });

  const { data, error, isLoading } = useSWR(playlistLink.length > 1 ? [playlistURL, options] : null, ([playlistURL, options]) => fetcher(playlistURL, options));

  return (
    <>
      <Head>
        <title>Playlist Collage</title>
        <meta name="description" content="Collage your image from playlist album covers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-full min-h-screen flex-col'>
        <label htmlFor='playlistInput' className='mt-12 text-3xl text-gray-300 w-2/3 mb-2'>Playlist link</label>
        <input id="playlistInput" onChange={(e)=>setPlaylistLink(e.target.value.replace(playlistREGEX, "")) } className="focus:placeholder:text-green-400 placeholder:text-gray-400 border-b-2 focus:border-green-400 border-gray-400 appearance-none w-2/3 text-3xl bg-none px-8 py-4 shadow-sm focus:outline-none focus:caret-green-500 text-green-400 bg-black dark:highlight-white/5" placeholder='playlist link'/>
        <label htmlFor='targetImageInput' className='mt-12 text-3xl text-gray-300 w-2/3 mb-2'>Link or upload image</label>
        <div className='w-2/3 flex flex-row'>
          <input id='targetImageInput'  onChange={(e)=>setTargetLink(e.target.value) } className="focus:placeholder:text-green-400 placeholder:text-gray-400 border-b-2 focus:border-green-400 border-gray-400 appearance-none w-2/3 text-3xl bg-none px-8 shadow-sm focus:outline-none focus:caret-green-500 text-gray-400 bg-black dark:highlight-white/5" placeholder='image link' />
          <label className="w-1/3 flex justify-center items-end">
            <span className="sr-only">Choose profile photo</span>
            <input type="file" onChange={(e)=> setTargetLink(e.target.files[0])} className="block w-full text-sm pl-4 text-gray-500 file:flex text-center file:w-full file:flex-col file:mb-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-green-600 hover:file:bg-green-200 " />
          </label>
        </div>
        <div className='w-2/3 aspect-square flex justify-center items-center mt-12 collage-wrapper mb-12'>{/*aito-cols-[100%/n]*/}
          {data ? <ReactImageMosaic width={800} height={800} rows={40} columns={40} sources={data} colorBlending={0.15} target={targetLink ? URL.createObjectURL(targetLink) : "./mal.jpg"} crossOrigin={"anonymous"} /> : null}
          {isLoading ? <div className='text-gray-300 animate-pulse'>Loading your playlist...</div>:null}
        </div>
      </main>
    </>
  )
}
