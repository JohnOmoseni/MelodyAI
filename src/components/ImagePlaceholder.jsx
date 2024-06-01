import logo from "@assets/logo.ico";
import { faker } from "@faker-js/faker";

function ImagePlaceholder({ src, showBorder, fullName, render, className }) {
  let text = "";
  if (fullName) {
    const initials = fullName?.split(" ", 2);
    const [firstName, secondName] = initials;
    text = `${firstName[0]}${secondName[0]}`;
  }

  return (
    <div className="flex-row gap-4">
      <div
        className={`${className} relative icon w-[40px] max-w-[40px] h-[40px] text-sm rounded-[50%] clip-circle shadow-md filter ${
          showBorder && "border border-solid border-br-light"
        }`}
      >
        {!fullName ? (
          <img
            src={src ? src : logo}
            alt=""
            className="group-hover:scale-105 transition"
          />
        ) : (
          <span className="uppercase">{text}</span>
        )}
      </div>
      {render && render()}
    </div>
  );
}
export default ImagePlaceholder;
