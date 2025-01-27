import React from "react";
import logo__1 from "@/public/Image/logo-1.png";
import logo__2 from "@/public/Image/logo-2.png";
import logo__3 from "@/public/Image/logo-3.png";
import logo__4 from "@/public/Image/logo-4.png";
import logo__5 from "@/public/Image/logo-5.png";
import logo__6 from "@/public/Image/logo-6.png";
import logo__7 from "@/public/Image/logo-7.png";
import logo__8 from "@/public/Image/logo-8.png";
import Image from "next/image";
export default function CustomerLogo() {
  return (
    <div className="flex items-center flex-col justify-center md:max-w-[940px] mx-auto md:max-h-[237px]">
      <h1 className="font-outfit font[500px] text-center leading-[34px] text-3xl md:text-[24px] mt-[104px]">
        Trusted by nearly 5000+ paying customers
      </h1>
      <div className="mt-[77px]">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-[75px] mb-[46px]">
          <Image className="opacity-45" src={logo__1} alt="logo-1" />
          <Image className="opacity-45" src={logo__2} alt="logo-2" />
          <Image className="opacity-45" src={logo__3} alt="logo-3" />
          <Image className="opacity-45" src={logo__4} alt="logo-4" />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2 gap-[75px] mb-[46px]">
          <Image className="opacity-45 md:mx-auto" src={logo__5} alt="logo-5" />
          <Image className="opacity-45 md:mx-auto" src={logo__6} alt="logo-6" />
          <Image className="opacity-45 md:mx-auto" src={logo__7} alt="logo-7" />
          <Image className="opacity-45 md:mx-auto" src={logo__8} alt="logo-8" />
        </div>
      </div>
    </div>
  );
}
