import React from "react";
interface Props {
  text: string;
}
export default function FormHeader({ text }: Props) {
  return <p className="text-h3 font-h3 text-primary-black">{text}</p>;
}
