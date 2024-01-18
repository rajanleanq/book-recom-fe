import Image from "next/image";
import React from "react";
import FooterList from "./footer-list";

export default function Footer() {
  const contact = {
    headerTxt: "contact",
    children: ["9840805484", "rajan.shah2022@gmail.com"],
  };
  const site_nav = {
    headerTxt: "site navigation",
    children: ["About Us", "FAQs", "Privacy Policy", "Terms and Conditions"],
  };
  return (
    <div className="bg-footer-bg pt-4">
      <div className="w-4/5 mx-auto flex flex-row items-start justify-between border-b border-solid border-gray-500 px-20 py-10">
        <Image src="/images/logo.png" alt="logo" width={217} height={34} />
        <FooterList
          headerTxt={contact.headerTxt}
          childrens={contact.children}
          key={"contact-list"}
        />
        <FooterList
          headerTxt={site_nav.headerTxt}
          childrens={site_nav.children}
          key={"site-nav"}
        />
      </div>
      <p className="text-p text-gray-500 text-center pt-4 pb-10">© 2024 ReadRadar. All rights reserved.</p>
    </div>
  );
}
