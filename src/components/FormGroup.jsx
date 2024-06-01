import { useRef, useState } from "react";

export const FormGroup = ({
  type = "text",
  label,
  name,
  value,
  placeholder = "",
  errors,
  touched,
  onBlur,
  onChange,
}) => {
  return (
    <div
      className={`w-full group ${
        errors[name] && touched[name] ? "is-error" : ""
      }`}
    >
      <>
        <label
          htmlFor={name}
          className="text-sm mb-1 inline-block tracking-wider text-shadow"
        >
          {label}
        </label>
        <div
          className={`${
            errors[name] && touched[name]
              ? "border-pink-400"
              : "border-br-light bg-[#282828]"
          } my-2 relative rounded-md shadow-sm border border-solid form-group w-full !justify-start text-white align-middle overflow-hidden`}
        >
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="w-full py-2.5 px-3 field-reset leading-none placeholder:text-neutral-400 placeholder:text-base"
          />
        </div>
        <p className="mt-1 ml-1 hidden group-[.is-error]:block text-pink-600 font-semibold text-tiny tracking-wide">
          {errors[name]}
        </p>
      </>
    </div>
  );
};
