type TabProps = {
  setPlaylistLink: (value: string) => void;
  setImagesCategory: (value: "album" | "artist") => void;
};

export const TabHeader: React.FC<TabProps> = ({ setPlaylistLink, setImagesCategory }) => {
  return (
    <header className="mx-3 mt-3 md:mt-0 text-white hidden md:block w-full">
      <h1 className=" my-1 md:my-0 md:mb-3 text-2xl font-bold ">
        Playlist collage
      </h1>
      <nav className="gap-7 flex flex-row mx-3 text-xl">
        <button className="border-b border-green-500 appearance-none">
          Albums
        </button>
        <button
          className="border-b border-green-500 appearance-none text-gray-400 active:text-white"
          onClick={() =>
            setPlaylistLink("6gpIBV1ghZ55VdOfo1sOBE?si=e52d870890bc4701")
          }
        >
          Playlist link
        </button>
        <button disabled className="hidden text-slate-500 appearance-none">
          Artists
        </button>
      </nav>
    </header>
  );
};
