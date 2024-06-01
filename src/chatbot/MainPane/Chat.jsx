import { useSelector } from "react-redux";
import ImagePlaceholder from "../../components/ImagePlaceholder";

export function Chat({ chat }) {
  const { user } = useSelector((state) => state.userState);
  const you = chat?.outgoing;
  const bot = chat?.incoming;
  const fullName = `${user?.firstname} ${
    user?.lastname ? user?.lastname : user?.firstname.slice(1)
  }`;

  return (
    <div
      className={`w-full flex items-center ${
        you ? "flex-row" : "flex-row-reverse"
      }  !justify-start gap-3`}
    >
      <div className="self-start">
        <ImagePlaceholder
          showBorder
          fullName={you && fullName}
          className="!w-[30px] !h-[30px] !text-xs"
        />
      </div>

      <div
        className={`relative min-w-[100px] max-w-[70%] sm:max-w-[60%] pt-1.5 pb-2 px-3 rounded-md shadow-sm bg-opacity-30 after:absolute after:top-0 after:right-[99%] after:translate-x-[8px] after:border-solid after:border-b-transparent after:border-x-transparent after:z-[1px] after:rounded-tl-lg  ${
          you
            ? "bg-violet-700 after:border-8 after:border-t-violet-700 after:border-opacity-20"
            : "bg-[#555]"
        }`}
      >
        <h4
          className={`font-semibold flex-row !justify-between capitalize text-sm font-kinn text-shadow  ${
            you ? "text-[#ccc]" : "text-orange-400 text-opacity-80"
          }`}
        >
          {you ? "You" : "Cadence"}
          {you && (
            <span className="text-tiny text-right text-gray-400">
              {user?.firstname}
            </span>
          )}
        </h4>
        <p className="break-words text-[0.85rem] text-[#ddd] mt-2.5 pl-1 pr-3">
          {chat?.message}
        </p>
      </div>
    </div>
  );
}
export default Chat;
