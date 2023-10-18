type TabProps = {
	setPlaylistLink: (value: string) => void;
	setImagesCategory: (value: "albums" | "artists") => void;
	tailwindVisibility: string;
};

export const TabHeader: React.FC<TabProps> = ({
	setPlaylistLink,
	setImagesCategory,
	tailwindVisibility,
}) => {
	return (
		<header
			className={
				"mx-3 mt-3 md:mt-0 text-white md:w-full " + tailwindVisibility
			}
		>
			<h1 className=" my-1 md:my-0 md:mb-3 text-2xl font-bold ">
				Playlist collage
			</h1>
			<nav className="gap-7 flex flex-row mx-3 md:mx-0 text-xl">
				<form className="flex gap-7">
					<input
						type="radio"
						name="type"
						defaultChecked
						id={"albums" + tailwindVisibility}
						className="hidden peer/albums"
						onChange={() => setImagesCategory("albums")}
					/>
					<label
						htmlFor={"albums" + tailwindVisibility}
						className="peer-checked/albums:border-green-500  border-gray-400 border-b cursor-pointer text-gray-400 peer-checked/albums:text-white"
					>
						Albums
					</label>
					<input
						type="radio"
						id={"artists" + tailwindVisibility}
						name="type"
						className="hidden peer/artists"
						onChange={() => setImagesCategory("artists")}
					/>
					<label
						htmlFor={"artists" + tailwindVisibility}
						className="peer-checked/artists:border-green-500 border-b border-gray-400 cursor-pointer text-gray-400 peer-checked/artists:text-white"
					>
						Artists
					</label>
				</form>
				<button
					className="border-b active:border-green-500 appearance-none border-gray-400 text-gray-400 active:text-white"
					onClick={() =>
						setPlaylistLink(
							"6gpIBV1ghZ55VdOfo1sOBE?si=e52d870890bc4701"
						)
					}
				>
					Playlist link
				</button>
			</nav>
		</header>
	);
};
