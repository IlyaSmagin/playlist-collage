import Head from "next/head";
import { useState, useReducer } from "react";
import useSWR from "swr";
import { ReactImageMosaic } from "react-image-mosaic";

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

export default function Home() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [startGeneration, setStartGeneration] = useState(false);
  const [targetLink, setTargetLink] = useState<string>();
  const [showCanvasMenu, setShowCanvasMenu] = useState(false);

  const [currentOption, setCurrentOption] = useState("color");
  const playlistREGEX = /.*playlist\//i;
  const playlistURL =
    "https://spotify23.p.rapidapi.com/playlist_tracks/?id=" + playlistLink;
  const { data, error, isLoading } = useSWR(
    playlistLink.length > 1 ? [playlistURL, options] : null,
    ([playlistURL, options]) => fetcher(playlistURL)
  );
  function downloadURI(uri: string, name: string) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleExport = () => {
    const canvas = document.getElementsByTagName(
      "canvas"
    )[0] as HTMLCanvasElement;
    const uri = canvas.toDataURL();
    downloadURI(uri, "collage.png");
  };
  const generateCollage = () => {
    if (data && targetLink) setStartGeneration((prev) => !prev);
  };

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

      <header className="mx-3 mt-3 text-white">
        <h1 className=" my-1 text-2xl font-bold">Playlist collage</h1>
        <nav className="gap-7 flex flex-row mx-3 text-xl">
          <button className="border-b border-green-500 appearance-none">
            Albums
          </button>
          <button disabled className="text-slate-500 appearance-none">
            Artists
          </button>
        </nav>
      </header>

      <main className="md:flex-row lg:mx-6 lg:gap-x-28 md:items-stretch flex flex-col items-center justify-center h-full mx-6 mt-3">
        <div
          className={
            "sm:w-2/3 md:w-2/5 aspect-square bg-zinc-800 relative flex flex-col items-center justify-center w-full"
          }
        >
          {showCanvasMenu ? ( // TODO: change layout to row in desctop
            <div
              className="aspect-square collage-wrapper bg-zinc-800/50 absolute z-20 flex flex-col items-center justify-center w-full mt-12 mb-12 text-white"
              onClick={() => setShowCanvasMenu((prev) => !prev)}
            >
              <button
                className=" active:scale-95 px-10 py-3 mt-5 mb-3 text-sm font-bold text-white transition-transform bg-green-500 rounded-full"
                onClick={handleExport}
              >
                Download
              </button>
              or
              <label
                className=" flex flex-col items-end justify-center pt-2"
                htmlFor="photoUpload"
              >
                <button className="active:scale-95 px-10 py-3 mt-5 mb-3 text-sm font-bold text-white transition-transform bg-transparent border-[1px] rounded-full">
                  Upload new image
                </button>
              </label>
            </div>
          ) : null}
          <div className="aspect-square collage-wrapper absolute z-10 flex flex-col items-center justify-center w-full mt-12 mb-12">
            {data && startGeneration ? (
              <div onClick={() => setShowCanvasMenu((prev) => !prev)}>
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
              </div>
            ) : (
              <label
                className=" flex flex-col items-end justify-center pt-2"
                htmlFor="photoUpload"
              >
                <span className="sr-only">Upload target photo</span>
                <input
                  id="photoUpload"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files instanceof FileList)
                      return setTargetLink(
                        URL.createObjectURL(e.target.files[0])
                      );
                  }}
                  className=" file:flex file:w-full file:flex-col file:mb-2 file:py-1 file:px-4 file:rounded-full file:border-[1px] file:border-zinc-500 file:text-sm file:font-semibold file:bg-transparent file:appearance-none file:text-gray-400 hover:file:bg-zinc-200 hover:file:text-slate-900 block text-sm text-center text-gray-500"
                />
              </label>
            )}
            {isLoading ? (
              <div className="animate-pulse text-gray-300">
                Loading your playlist...
              </div>
            ) : null}
          </div>
        </div>
        <div className="lg:justify-evenly lg:mx-0 lg:w-1/3 flex flex-col items-center justify-center mx-6 mt-3">
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
              className="lg:my-4 focus:placeholder:text-green-400 placeholder:text-gray-400 focus:border-green-400 bg-none focus:outline-none focus:caret-green-500 dark:highlight-white/5 bg-zinc-800 w-full px-8 py-2 mt-1 text-sm text-green-400 rounded-md appearance-none"
              placeholder="Link to playlist"
            />
          </div>
          <form className="flex flex-col items-center justify-center w-full mx-6 text-white">
            <div className="md:text-base flex flex-row items-center justify-center gap-3 my-1 text-sm">
              <input
                type="radio"
                name="collageOptions"
                id="size"
                className="peer/size hidden"
                onClick={() => setCurrentOption("size")}
              />
              <label
                htmlFor="size"
                className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none peer-checked/size:bg-white peer-checked/size:border-white peer-checked/size:text-green-600"
              >
                <span className="sm:block hidden">Image size</span>{" "}
                <span className="sm:hidden">Size</span>
              </label>
              <input
                type="radio"
                name="collageOptions"
                id="color"
                className="peer/color hidden"
                onClick={() => setCurrentOption("color")}
              />
              <label
                htmlFor="color"
                className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none  peer-checked/color:bg-white peer-checked/color:border-white peer-checked/color:text-green-600"
              >
                Coloring
              </label>
              <input
                type="radio"
                name="collageOptions"
                id="grid"
                className="peer/grid hidden"
                onClick={() => setCurrentOption("grid")}
              />
              <label
                htmlFor="grid"
                className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none  peer-checked/grid:bg-white peer-checked/grid:border-white peer-checked/grid:text-green-600"
              >
                <span className="sm:block hidden">Grid size</span>{" "}
                <span className="sm:hidden">Grid</span>
              </label>
            </div>
            <input
              type="range"
              name={currentOption}
              id="range"
              min="4"
              max="40"
              step="1"
              className="appearance-none bg-transparent color-gray-500 w-full mt-1.5 lg:mt-4"
            />
          </form>
          <button
            className={
              " active:scale-95 px-10 py-3 mt-5 mb-3 text-sm font-bold  transition-transform " +
              (data && targetLink
                ? "bg-green-500 rounded-full text-white"
                : "bg-transparent border-[1px] border-zinc-400 rounded-full text-zinc-400")
            }
            onClick={generateCollage}
          >
            Generate Collage
          </button>
        </div>
      </main>
    </>
  );
}
