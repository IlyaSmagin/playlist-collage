type PlaylistProps = {
  setPlaylistLink: (value: string) => void;
  playlistLink: string;
  isLoading: boolean;
};

const playlistREGEX = /.*playlist\//i;

export const PlaylistInput: React.FC<PlaylistProps> = ({
  setPlaylistLink,
  playlistLink,
  isLoading,
}) => {
  return (
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
  );
};
