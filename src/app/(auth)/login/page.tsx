import React from "react";
import type { Metadata } from "next";
import { MetaTags } from "@/contants/meta-data";
import LoginComponent from "@/components/pages/(auth)/login/login";

export const metadata: Metadata = MetaTags?.loginPage;

export default function LoginPage() {
  return <LoginComponent />;
}
