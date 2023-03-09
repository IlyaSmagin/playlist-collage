import Head from 'next/head'
import { useState } from 'react'
import useSWR from "swr"
import { ReactImageMosaic } from 'react-image-mosaic'
import { blob } from 'stream/consumers';



export default function Home() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [targetLink, setTargetLink] = useState<string>();
  const playlistREGEX = /.*playlist\//i;
  const playlistURL = "https://spotify23.p.rapidapi.com/playlist_tracks/?id=" + playlistLink;
  const options: RequestInit = {
	  method: 'GET',
	  headers: {
      'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY as string,
      'X-RapidAPI-Host': process.env.NEXT_PUBLIC_API_HOST as string
	  }
  };
  const fetcher = (url: string) => fetch(url, options)
    .then(res => res.json() as Promise<{ tracks : {items: {track: {album: {images : {url :string}[]}}}[]} }>)
    .then(res => {
      return res.tracks.items.map(track => track.track.album.images[0].url)
    });

  const { data, error, isLoading } = useSWR(playlistLink.length > 1 ? [playlistURL, options] : null, ([playlistURL, options]) => fetcher(playlistURL));

  return (
    <>
      <Head>
        <title>Playlist Collage</title>
        <meta name="description" content="Collage your image from playlist album covers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='flex justify-center items-center h-full min-h-screen flex-col'>
        <label htmlFor='playlistInput' className='mt-12 text-xl md:text-3xl text-gray-300 md:w-2/3 w-10/12 mb-2'>Playlist link</label>
        <input id="playlistInput" onChange={(e)=>setPlaylistLink(e.target.value.replace(playlistREGEX, "")) } className="focus:placeholder:text-green-400 placeholder:text-gray-400 border-b-2 focus:border-green-400 border-gray-400 appearance-none md:w-2/3 w-10/12 text-xl md:text-3xl bg-none px-8 py-2 md:py-4 shadow-sm focus:outline-none focus:caret-green-500 text-green-400 bg-black dark:highlight-white/5" placeholder='playlist link'/>
        <label htmlFor='targetImageInput' className='mt-12 text-xl md:text-3xl text-gray-300 md:w-2/3 w-10/12 mb-2'>Upload image</label>
        <div className='md:w-2/3 w-10/12 flex md:flex-row flex-col'>
          <input id='targetImageInput'  onChange={(e)=>setTargetLink(e.target.value) } className="hidden focus:placeholder:text-green-400 placeholder:text-gray-400 border-b-2 focus:border-green-400 border-gray-400 appearance-none md:w-2/3 w-full text-xl md:text-3xl bg-none px-8 py-2 md:py-4 shadow-sm focus:outline-none focus:caret-green-500 text-gray-400 bg-black dark:highlight-white/5" placeholder='image link' />
          <label className="md:w-1/3 w-full flex flex-col justify-center items-end pt-2">
            <span className='hidden w-full text-gray-300 text-center py-2'>or</span>
            <span className="sr-only">Choose profile photo</span>
            <input type="file"
              onChange={(e) => { if (e.target.files instanceof FileList) return setTargetLink(URL.createObjectURL(e.target.files[0])) }}
              className="block w-full text-sm md:pt-0 md:pl-4 text-gray-500 file:flex text-center file:w-full file:flex-col file:mb-2 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-100 file:text-green-600 hover:file:bg-green-200 " />
          </label>
        </div>
        <div className='md:w-2/3 w-10/12 aspect-square flex justify-center items-center mt-12 collage-wrapper mb-12'>
          {data ? <ReactImageMosaic width={800} height={800} rows={40} columns={40} sources={data} colorBlending={0.15} target={targetLink || "./mal.jpg"} crossOrigin={"anonymous"} /> :
          null}
          {isLoading ? <div className='text-gray-300 animate-pulse'>Loading your playlist...</div>:null}
        </div>
      </main>
    </>
  )
}
