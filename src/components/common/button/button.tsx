import React from "react";

export default function ButtonComponent({text,type,bgColor}:ButtonProps) {
  return (
    <button
      type={type}
      className="font-h1 rounded-md border border-solid border-primary bg-primary py-2 px-4 text-white hover:scale-105 ease-in-out duration-150 text-btn"
    >
      {text}
    </button>
  );
}
