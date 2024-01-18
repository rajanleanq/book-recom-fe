// for footer section
// list with header
// eg
// Contact us -->parent text
// 1273892 -->child
// adress -->child
import React from "react";
interface Props {
  headerTxt: string;
  childrens: Array<string>;
}
export default function FooterList({ headerTxt, childrens }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="uppercase text-white text-p font-link">{headerTxt}</p>
      <div className="flex flex-col gap-1">
        {childrens.map((p: string, index: number) => (
          <p key={index} className="text-white text-p capitalize">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}
