import React from "react";
import Image from "next/image";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "hoc lap trinh nextjs",
  description: "nextjs co ban,de hoc",
};
export default function page() {
  return (
    <div>
      Trang chinh!
      <img
        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwwo9141st09c0"
        width={500}
        height={500}
        alt=""
      />
      <Image
        src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwwo9141st09c0"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </div>
  );
}
