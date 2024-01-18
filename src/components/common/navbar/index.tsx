"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { routes } from "@/contants/routes";

export default function Navbar() {
  const router = useRouter();
  return (
    <div
      className="px-20 py-6 flex flex-row justify-between items-center sticky top-0 left-0 z-20"
      style={{
        background: "linear-gradient(0deg, #050A24 0%, #050A24 100%), #D9D9D9",
      }}
    >
      <Image
        alt="logo"
        width={195}
        height={28}
        src={"/images/logo.png"}
        className="cursor-pointer"
        onClick={() => router.push(routes.book.book)}
      />
      <div className="flex flex-row gap-4">
        <p
          className="text-white cursor-pointer uppercase text-btn font-p-sm"
          onClick={() => router.push(routes?.auth?.login)}
        >
          Login
        </p>
        <p
          className="text-white uppercase cursor-pointer text-btn font-p-sm"
          onClick={() => router.push(routes?.auth?.signup)}
        >
          Sign up
        </p>
      </div>
    </div>
  );
}
