import ImagePlaceholder from "@components/ImagePlaceholder";
import { ImpulseSpinner } from "react-spinners-kit";

export function BotLoading() {
  return (
    <div className="flex items-center flex-row-reverse !justify-start gap-3">
      <div className="self-start">
        <ImagePlaceholder showBorder className="!w-[30px] !h-[30px] !text-xs" />
      </div>
      <div
        className={`bg-[#444] after:border-t-[#444] relative w-nax py-1.5 px-3 rounded-md shadow-sm after:absolute after:top-0 after:right-[99%] after:translate-x-[8px] after:border-8 after:border-solid after:border-b-transparent after:border-x-transparent after:z-[1px] after:rounded-tl-lg`}
      >
        <h4 className="font-semibold capitalize text-base font-kinn text-shadow text-[#ccc]">
          Cadence
        </h4>

        <div className="mx-auto icon mt-3 mb-2">
          <ImpulseSpinner
            size={20}
            className="icon"
            frontColor="#bababa"
            backColor="#282828"
          />
        </div>
      </div>
    </div>
  );
}
export default BotLoading;
