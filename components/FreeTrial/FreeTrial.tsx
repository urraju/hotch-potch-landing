import React from "react";

export default function FreeTrial() {
  return (
    <div className="max-w-[1038px]  mx-auto mt-[138px] ">
      <div className="bg-gradient-to-l from-gradientR to-gradientL flex md:items-center rounded-[10px] flex-col md:flex-row justify-between md:px-[48px] px-[30px] py-[34px] space-y-6 md:space-y-0">
        <h1 className="md:text-[32px] max-w-[530px] text-3xl leading-[42px] text-paragraph2 font-outfit font-semibold">
          It will help you improve your writing   & bring ideas more c
          learly.
        </h1>
        <button className="w-[214px] h-[60px] rounded-[5px] font-inter bg-white text-black  py-[16px] px-[20px] text-right">
          Start 14 Days Free Trial
        </button>
      </div>
    </div>
  );
}
