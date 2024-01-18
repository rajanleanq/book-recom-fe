import React from "react";

export default function SectionTitle({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <p className={["text-h1 font-500 text-black", className].join(" ")}>
      {text}
    </p>
  );
}
