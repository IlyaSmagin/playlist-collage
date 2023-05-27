import Head from "next/head";
import { useState, useDeferredValue, memo } from "react";
import useSWR from "swr";
import { ReactImageMosaic } from "react-image-mosaic";
import { CollageOptions } from "@/components/CollageOptions";
import { TabHeader } from "@/components/TabHeader";

const options: RequestInit = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_API_KEY as string,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_API_HOST as string,
  },
};
type Data = { [key: string]: Array<string> };
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
    .then(
      (res) =>
        ({
          albums: res.tracks.items.map(
            (track) => track.track.album.images[0].url
          ),
          artists: res.tracks.items.map(
            (track) => track.track.album.images[0].url
          ),
        } as Data)
    );
const ImageMosaic: React.FC<{
  options: CollageOptions;
  targetLink: string;
  data: Array<string>;
}> = memo(function ImageMosaic({ options, targetLink, data }) {
  return (
    <ReactImageMosaic
      width={options.size}
      height={options.size}
      rows={options.grid}
      columns={options.grid}
      sources={data}
      colorBlending={options.color}
      target={targetLink}
      crossOrigin={"anonymous"}
    />
  );
});

export default function Home() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [startGeneration, setStartGeneration] = useState(false);
  const [targetLink, setTargetLink] = useState<string>();
  const [showCanvasMenu, setShowCanvasMenu] = useState(false);
  const [currentOption, setCurrentOption] = useState("color");
  const [imagesCategory, setImagesCategory] = useState("albums");
  const [collageOptions, setCollageOptions] = useState<CollageOptions>({
    size: 800,
    color: 0.2,
    grid: 40,
  });
  const deferredOptions = useDeferredValue(collageOptions);
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
    if (data && targetLink) setStartGeneration(true);
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

      <TabHeader
        setPlaylistLink={setPlaylistLink}
        setImagesCategory={setImagesCategory}
        tailwindVisibility="md:hidden"
      />

      <main className="md:flex-row lg:mx-6 lg:gap-x-28 min-h-[89%] md:h-full flex flex-col items-center justify-around md:justify-center mx-6">
        <div
          className={
            "sm:w-2/3 md:w-2/5 aspect-square bg-zinc-800 relative flex flex-col items-center justify-center w-full"
          }
        >
          {showCanvasMenu ? (
            <div
              className="aspect-square collage-wrapper bg-zinc-800/50 absolute z-20 flex flex-col items-center justify-center w-full text-white"
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
                className=" flex flex-col items-end justify-center pt-2 "
                htmlFor="photoUpload1"
                onClick={(e) => e.stopPropagation()}
              >
                <span className="cursor-pointer active:scale-95 px-10 py-3 mt-5 mb-3 text-sm font-bold text-white transition-transform bg-transparent border-[1px] rounded-full">
                  Upload new image
                </span>
                <input
                  id="photoUpload1"
                  type="file"
                  accept="image/*"
                  onChange={(e) => {
                    if (e.target.files instanceof FileList)
                      setTargetLink(URL.createObjectURL(e.target.files[0]));
                    setStartGeneration(true);
                    setShowCanvasMenu(false);
                  }}
                  className="hidden"
                />
              </label>
            </div>
          ) : null}
          <div className="aspect-square collage-wrapper absolute z-10 flex flex-col items-center justify-center w-full">
            {data && startGeneration ? (
              <div onClick={() => setShowCanvasMenu((prev) => !prev)}>
                <ImageMosaic
                  options={deferredOptions}
                  data={data[imagesCategory]}
                  targetLink={targetLink || "./mal.jpg"}
                />
              </div>
            ) : (
              <>
                <label
                  className=" flex flex-col items-end justify-center pt-2"
                  htmlFor="photoUpload"
                >
                  <span className="active:scale-95 px-10 py-3 mt-5 mb-3 text-sm font-bold text-white transition-transform bg-transparent border-[1px] rounded-full">
                    {targetLink ? "Change collage image" : "Upload new image"}
                  </span>
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
                    className="hidden file:flex file:w-full file:flex-col file:mb-2 file:py-1 file:px-4 file:rounded-full file:border-[1px] file:border-zinc-500 file:text-sm file:font-semibold file:bg-transparent file:appearance-none file:text-gray-400 hover:file:bg-zinc-200 hover:file:text-slate-900 text-sm text-center text-gray-500"
                  />
                </label>
                {targetLink && (
                  <img
                    src={targetLink}
                    alt="uploaded image for a collage"
                    className="absolute h-full w-full opacity-10 pointer-events-none blur-sm"
                  />
                )}
              </>
            )}
          </div>
        </div>
        <div className="lg:justify-between lg:mx-0 md:w-5/12 w-full h-full md:h-auto flex flex-col md:aspect-square gap-y-4 items-center justify-center mx-6">
          <TabHeader
            setPlaylistLink={setPlaylistLink}
            setImagesCategory={setImagesCategory}
            tailwindVisibility="hidden md:block "
          />
          <div className="text-while w-full mx-6">
            <label
              htmlFor="playlistInput"
              className="mr-4 text-xl font-bold text-gray-300 flex flex-row gap-x-4 items-center"
            >
              Link playlist
              {isLoading ? (
                <svg
                  className="animate-spin -ml-1 mr-3 mt- h-5 w-5 text-green-400 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
            </label>
            <input
              id="playlistInput"
              onChange={(e) =>
                setPlaylistLink(e.target.value.replace(playlistREGEX, ""))
              }
              value={playlistLink}
              className="lg:my-4 focus:placeholder:text-green-400 placeholder:text-gray-400 focus:border-green-400 bg-none focus:outline-none focus:caret-green-500 dark:highlight-white/5 bg-zinc-800 w-full px-8 py-2 mt-1 text-sm text-green-400 rounded-md appearance-none"
              placeholder="Link to playlist"
            />
          </div>
          <CollageOptions
            currentOption={currentOption}
            setCurrentOption={setCurrentOption}
            setCollageOptions={setCollageOptions}
          />
          <button
            className={
              " active:scale-95 px-10 relative py-3 mt-2 mb-4 text-sm font-bold transition-transform z-10 " +
              (data && targetLink
                ? "bg-green-500 rounded-full text-white"
                : " bg-transparent border-[1px] border-zinc-400 rounded-full text-zinc-400")
            }
            onClick={generateCollage}
          >
            Generate Collage
            <div
              className={
                "absolute appearance-none inset-0 rounded-full -z-10 " +
                (data && targetLink && !startGeneration
                  ? " bg-green-500  animate-ping-once "
                  : " bg-transparent ")
              }
            ></div>
          </button>
        </div>
      </main>
    </>
  );
}
