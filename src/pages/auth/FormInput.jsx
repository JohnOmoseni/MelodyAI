import { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function FormGroup({
  type = "text",
  required,
  label,
  name,
  value,
  placeholder = "",
  icon,
  errors,
  touched,
  onBlur,
  onChange,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const inputRef = useRef(null);

  const handleShowPassword = (e) => {
    setShowPassword(!showPassword);
    inputRef.current.type = showPassword ? "password" : "text";
  };

  return (
    <div
      className={`w-full group ${
        errors[name] && touched[name] ? "is-error" : ""
      }`}
    >
      <label
        htmlFor={name}
        className={`relative text-sm mb-1 inline-block tracking-wider text-shadow after:absolute ${
          required && "after:content-['*']"
        } after:-top-[2px] after:-right-2.5 after:text-red-800 after:text-s`}
      >
        {label}
      </label>
      <div
        className={`${
          errors[name] && touched[name]
            ? "border-pink-400 bg-pink-600 bg-opacity-10"
            : "border-br-light bg-[#333]"
        } px-3 bg-opacity-50 relative rounded-md shadow-sm border border-solid  form-group w-full flex-row gap-2 !justify-start align-middle`}
      >
        {type === "password" ? (
          <>
            <input
              ref={inputRef}
              type={type}
              id={name}
              name={name}
              value={value}
              placeholder={placeholder}
              onBlur={onBlur}
              onChange={onChange}
              className="peer w-full py-2.5 field-reset placeholder:text-sm md:placeholder:text-regular"
            />

            <span
              className="peer-focus:visible absolute center right-3"
              onClick={handleShowPassword}
            >
              {showPassword ? (
                <FaEyeSlash size={16} fill="#888" />
              ) : (
                <FaEye size={16} fill="#888" />
              )}
            </span>
          </>
        ) : (
          <>
            {icon && (
              <span className="items-start leading-none icon pt-[1px]">
                {icon}
              </span>
            )}
            <input
              id={name}
              type={type}
              name={name}
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              className="w-full py-2.5 field-reset leading-none placeholder:text-neutral-400 placeholder:text-base placeholder:truncate"
            />
          </>
        )}
      </div>
      <p className="mt-1 ml-[1px] hidden group-[.is-error]:block text-pink-600 font-semibold text-xs tracking-wide">
        {errors[name]}
      </p>
    </div>
  );
}
