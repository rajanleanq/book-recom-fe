import React from "react";
import { Metadata } from "next";
import { MetaTags } from "@/contants/meta-data";
import SingleBookComponent from "@/components/pages/book/[id]/single-book";

export const metadata: Metadata = MetaTags?.singleBook;

export default function SingleBook() {
  return <SingleBookComponent />;
}
