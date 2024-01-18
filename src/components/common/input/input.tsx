import React from "react";
import { InputProps } from "./index.interface";

export default function InputComponent({
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  id,
  name,
  label,
}: InputProps) {
  return (
    <>
      {label && (
        <label htmlFor={id} className="text-p-sm font-p-sm text-primary-black">
          {label}
        </label>
      )}
      <input
        className="text-p-sm text-grey font-p bg-gray-100 w-full border border-solid border-gray-300 rounded-md px-2 py-3"
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </>
  );
}

