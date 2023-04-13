import Head from "next/head";
import { useState } from "react";
import useSWR from "swr";
import { ReactImageMosaic } from "react-image-mosaic";
import { blob } from "stream/consumers";

export default function Home() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [startGeneration, setStartGeneration] = useState(false);
  const [targetLink, setTargetLink] = useState<string>();
  const playlistREGEX = /.*playlist\//i;
  const playlistURL =
    "https://spotify23.p.rapidapi.com/playlist_tracks/?id=" + playlistLink;
  const options: RequestInit = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
      "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST as string,
    },
  };
  const fetcher = (url: string) =>
    fetch(url, options)
      .then(
        (res) =>
          res.json() as Promise<{
            tracks: {
              items: { track: { album: { images: { url: string }[] } } }[];
            };
          }>
      )
      .then((res) => {
        return res.tracks.items.map((track) => track.track.album.images[0].url);
      });

  const { data, error, isLoading } = useSWR(
    playlistLink.length > 1 ? [playlistURL, options] : null,
    ([playlistURL, options]) => fetcher(playlistURL)
  );

  return (
    <>
      <Head>
        <title>Playlist Collage</title>
        <meta
          name="description"
          content="Collage your image from playlist album covers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="mx-3 mt-5 text-white">
        <h1 className="my-2 text-3xl font-bold">Playlist collage</h1>
        <nav className="gap-7 flex flex-row mx-3 text-xl">
          <button className="border-b border-green-500 appearance-none">
            Albums
          </button>
          <button disabled className="text-slate-500 appearance-none">
            Artists
          </button>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center mx-6 mt-4">
        <div className="relative sm:w-2/3 md:w-1/3 aspect-square md:flex-row bg-zinc-800 flex flex-col items-center justify-center w-full">
          <div className="aspect-square collage-wrapper flex items-center justify-center w-full mt-12 mb-12 absolute pointer-events-none">
            {data && startGeneration ? (
              <ReactImageMosaic
                width={800}
                height={800}
                rows={40}
                columns={40}
                sources={data}
                colorBlending={0.15}
                target={targetLink || "./mal.jpg"}
                crossOrigin={"anonymous"}
              />
            ) : null}
            {isLoading ? (
              <div className="animate-pulse text-gray-300">
                Loading your playlist...
              </div>
            ) : null}
          </div>
          <label
            className=" flex flex-col items-end justify-center pt-2"
            htmlFor="photoUpload"
          >
            <span className="sr-only">Upload target photo</span>
            <input
              id="photoUpload"
              type="file"
              onChange={(e) => {
                if (e.target.files instanceof FileList)
                  return setTargetLink(URL.createObjectURL(e.target.files[0]));
              }}
              className=" file:flex file:w-full file:flex-col file:mb-2 file:py-1 file:px-4 file:rounded-full file:border-[1px] file:border-zinc-500 file:text-sm file:font-semibold file:bg-transparent file:appearance-none file:text-gray-400 hover:file:bg-zinc-200 hover:file:text-slate-900 block text-sm text-center text-gray-500"
            />
          </label>
        </div>
        <div className="text-while w-full mx-6 my-3">
          <label
            htmlFor="playlistInput"
            className="md:w-2/3 w-10/12 text-xl font-bold text-gray-300"
          >
            Link playlist
          </label>
          <input
            id="playlistInput"
            onChange={(e) =>
              setPlaylistLink(e.target.value.replace(playlistREGEX, ""))
            }
            className="focus:placeholder:text-green-400 mt-1 placeholder:text-gray-400 focus:border-green-400 bg-none focus:outline-none focus:caret-green-500 dark:highlight-white/5 w-full px-8 py-2 text-sm text-green-400 bg-zinc-800 rounded-md appearance-none"
            placeholder="Link to playlist"
          />
        </div>
        <form className="flex flex-col items-center justify-center mx-6 text-white w-full">
          <div className="flex flex-row items-center justify-center gap-3 my-1 text-sm md:text-base">
            <input
              type="radio"
              name="collageOptions"
              id="size"
              className="hidden"
            />
            <label
              htmlFor="size"
              className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none"
            >
              <span className="hidden sm:block">Image size</span>{" "}
              <span className="sm:hidden">Size</span>
            </label>
            <input
              type="radio"
              name="collageOptions"
              id="color"
              className="hidden"
            />
            <label
              htmlFor="color"
              className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none"
            >
              Coloring
            </label>
            <input
              type="radio"
              name="collageOptions"
              id="grid"
              className="hidden"
            />
            <label
              htmlFor="grid"
              className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none"
            >
              <span className="hidden sm:block">Grid size</span>{" "}
              <span className="sm:hidden">Grid</span>
            </label>
          </div>
          <input
            type="range"
            name="range"
            id="range"
            min="4"
            max="40"
            step="1"
            className="appearance-none bg-black color-gray-500 w-full"
          />
        </form>
        <button
          className=" bg-green-500 text-white font-bold rounded-full px-10 py-3 text-sm mt-5 mb-3 active:scale-95 transition-transform"
          onClick={() => setStartGeneration((prev) => !prev)}
        >
          Generate Collage
        </button>
      </main>
    </>
  );
}
