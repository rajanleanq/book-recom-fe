import React from "react";
import Image from "next/image";

export default function SideContent() {
  return (
    <div
      className="px-10 py-14 h-full justify-between flex flex-col"
      style={{
        background: "linear-gradient(0deg, #050A24 0%, #050A24 100%), #D9D9D9",
      }}
    >
      <Image alt="logo" width={195} height={28} src={"/images/logo.png"} />
      <p
        className="text-[56px] font-extralight text-white"
        style={{
          background:
            "linear-gradient(180deg, #FFF 0%, rgba(255, 255, 255, 0.44) 100%)",
          backgroundClip: "text",
        }}
      >
        Welcome.
        <br /> Start your journey now with our curated collections!
      </p>
    </div>
  );
}
