import React from "react";
import { Metadata } from "next";
import { MetaTags } from "@/contants/meta-data";
import BookComponent from "@/components/pages/book/book";

export const metadata: Metadata = MetaTags?.books;
export default function Books() {
  return <BookComponent />;
}
