"use client";
import React from "react";
import BookDescription from "./book-decription";
import BookCard from "../book-card";
import BackButton from "@/components/common/button/back-button";
import SectionTitle from "@/components/common/text/section-title";

export default function SingleBookComponent() {
  return (
    <div className="mx-auto w-4/5 flex flex-col gap-12 py-16">
      <div className="flex flex-col gap-2 items-start">
        <BackButton />
        <BookDescription />
      </div>
      <div className="flex flex-col gap-6">
        <SectionTitle
          text="More Similar Books Await Your Discovery "
          className="text-h4"
        />
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <BookCard key={index + "single-book"} />
          ))}
        </div>
      </div>
    </div>
  );
}
