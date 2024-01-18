import React from "react";

interface Props {
  text: string;
}
export default function ErrorMessage({ text }: Props) {
  return <p className="text-red-600 font-p-sm pt-1 text-p-sm">{text}</p>;
}
