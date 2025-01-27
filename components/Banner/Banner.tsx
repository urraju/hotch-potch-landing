import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Banner() {
  return (
    <div className="w-full flex items-center justify-center">
      <div className="py-[125px] w-[511px] text-center flex flex-col items-center justify-center">
        <h1 className=" text-5xl md:text-[60px] text-paragraph2 leading-[66px] font-outfit font-[500]">
          Write better content for your{" "}
          <span className=" relative bg-gradient-to-r from-[#FC6739] to-[#FFC947] bg-clip-text text-transparent">
            Facebook Ads
            <span className="w-full h-1 left-0 right-0 bottom-0 bg-gradient-to-r from-[#FC6739] to-[#FFC947] absolute"></span>
          </span>
        </h1>
        <h2 className="mt-[39px] text-paragraph1 font-inter text-[18px] leading-[28px]">
          Artificial intelligence writting tool helps you create blogs, social
          media websites and much more.
        </h2>
        <div className="mt-[46px]">
          <button className="w-[214px] h-[60px] rounded-[5px] font-inter bg-gradient-to-l hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all from-gradientR to-gradientL py-[16px] px-[20px] text-right">
            Start 14 Days Free Trial
          </button>
          <button className="w-[214px] h-[37px] flex items-center mt-[13px] justify-center font-inter text-[16px] rounded-[5px] gap-[7px] hover:bg-gradient-to-r hover:from-gradientL hover:to-gradientR hover:text-transparent hover:bg-clip-text border-gray-900 hover:border hover:border-gradientR">
            <IoPlayCircleOutline className="text-xl hover:bg-gradient-to-r hover:from-gradientL hover:to-gradientR hover:text-transparent hover:bg-clip-text" />
            Watch A Demo
          </button>
        </div>
      </div>
    </div>
  );
}
