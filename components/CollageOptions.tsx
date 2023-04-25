import { Dispatch, SetStateAction } from "react";

export type CollageOptions = {
  size: number;
  color: number;
  grid: number;
};
type OptionProps = {
  setStartGeneration: (value: boolean) => void;
  currentOption: string;
  setCurrentOption: (value: string) => void;
  setCollageOptions: Dispatch<SetStateAction<CollageOptions>>;
};
export const CollageOptions: React.FC<OptionProps> = ({
  setStartGeneration,
  currentOption,
  setCurrentOption,
  setCollageOptions,
}) => {
  return (
    <form className="md:text-base flex flex-row items-center justify-center w-full mx-6 gap-x-3 gap-y-1.5 text-white text-sm flex-wrap">
      <input
        type="radio"
        name="collageOptions"
        id="size"
        className="peer/size hidden"
        onChange={() => setCurrentOption("size")}
      />
      <label
        htmlFor="size"
        className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none peer-checked/size:bg-white peer-checked/size:border-white peer-checked/size:text-green-600"
      >
        <span className="sm:block hidden">Image size</span>{" "}
        <span className="sm:hidden">Size</span>
      </label>
      <input
        checked={currentOption === "color"}
        type="radio"
        name="collageOptions"
        id="color"
        className="peer/color hidden"
        onChange={() => setCurrentOption("color")}
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
        onChange={() => setCurrentOption("grid")}
      />
      <label
        htmlFor="grid"
        className="px-3 py-1 font-semibold border-[1px] border-zinc-700 rounded-full appearance-none  peer-checked/grid:bg-white peer-checked/grid:border-white peer-checked/grid:text-green-600"
      >
        <span className="sm:block hidden">Grid size</span>{" "}
        <span className="sm:hidden">Grid</span>
      </label>
      <input
        type="range"
        name={currentOption}
        onChange={(e) => {
          setCollageOptions((prev: CollageOptions) =>
            Object.assign({}, prev, (prev.size = Number(e.target.value) * 800))
          );
          setStartGeneration(false);
        }}
        min="1"
        max="3"
        step="1"
        className=" peer-checked/size:block hidden appearance-none bg-transparent color-gray-500 w-full mt-1.5 lg:mt-4 grow"
      />
      <input
        type="range"
        name={currentOption}
        min="0"
        max="100"
        step="1"
        onChange={(e) => {
          setCollageOptions((prev: CollageOptions) =>
            Object.assign(
              {},
              prev,
              (prev.color = Number(e.target.value) * 0.01)
            )
          );
          setStartGeneration(false);
        }}
        className=" peer-checked/color:block hidden appearance-none bg-transparent color-gray-500 w-full mt-1.5 lg:mt-4 grow"
      />
      <input
        type="range"
        name={currentOption}
        min="4"
        max="80"
        step="4"
        onChange={(e) => {
          setCollageOptions((prev: CollageOptions) =>
            Object.assign({}, prev, (prev.grid = Number(e.target.value)))
          );
          setStartGeneration(false);
        }}
        className=" peer-checked/grid:block hidden appearance-none bg-transparent color-gray-500 w-full mt-1.5 lg:mt-4 grow"
      />
    </form>
  );
};
