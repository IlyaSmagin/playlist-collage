import Head from "next/head";
import { useState, useDeferredValue, memo } from "react";
import useSWR from "swr";
import { ReactImageMosaic } from "react-image-mosaic";
import { CollageOptions } from "@/components/CollageOptions";
import { TabHeader } from "@/components/TabHeader";
import { PlaylistInput } from "@/components/PlaylistInput";

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
          <PlaylistInput
            setPlaylistLink={setPlaylistLink}
            playlistLink={playlistLink}
            isLoading={isLoading}
          />
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
