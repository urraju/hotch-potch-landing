"use client";

import React, { useState } from "react";

const tabs = [
  {
    id: "blog-headlines",
    title: "4 Blog Headlines",
    content: [
      "Create original content that ranks for SEO.",
      "Any mechanical keyboard enthusiasts in design?",
      "The More Important the Work, the More Important the Rest.",
      "How to design a product that can grow itself 10x in a year.",
    ],
  },
  {
    id: "blog-intros",
    title: "Blog Intros",
    content: [
      "Generate compelling introductions for your blogs.",
      "Catchy openings to engage your readers.",
      "Intro paragraphs tailored for specific topics.",
    ],
  },
  {
    id: "content-rewriter",
    title: "Content Rewriter",
    content: [
      "Rewrite sentences with better clarity.",
      "Rephrase content to improve readability.",
      "Transform basic text into engaging material.",
    ],
  },
  {
    id: "facebook-ads",
    title: "Facebook Ads",
    content: [
      "Create compelling ad headlines for Facebook.",
      "Boost engagement with catchy ad content.",
      "Optimize your ad copy for better conversions.",
    ],
  },
  {
    id: "product-description",
    title: "Product Description",
    content: [
      "Write persuasive product descriptions.",
      "Highlight product features effectively.",
      "Drive sales with impactful descriptions.",
    ],
  },
  {
    id: "pas-copywriting",
    title: "PAS Copywriting Formula",
    content: [
      "Problem, Agitate, Solution-based copywriting.",
      "Hook readers with relatable problems.",
      "Drive action with clear solutions.",
    ],
  },
];

export default function GenerateAiWeb() {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content || [];

  return (
    <section className=" max-w-[1085px] h-[621px] mx-auto mt-[100px] md:mt-[175px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-outfit md:text-[42px] font-semibold leading-[48px] mb-[83px]">
          Mixland helps you <br /> build beautiful website
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[49px]">
        {/* Left Side: Tabs */}
        <div className="lg:col-span-1 space-y-[10px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full text-left font-inter text-[16px] px-[22px] py-[15px] rounded-[10px] font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-gradientL to-gradientR text-white"
                  : " hover:bg-gray-800 text-gray-300 border border-gray-800 "
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Right Side: Content */}
        <div className="lg:col-span-2 bg-[#282A37] rounded-[10px] py-[15px] px-[19px] shadow-md">
          {/* Mock Browser Header */}
          <div className="flex items-center mb-4 ml-3">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <h3 className="text-[16px]  font-inter text-paragraph1 font-semibold mb-6 px-[29px]">
            {tabs.find((tab) => tab.id === activeTab)?.title} Generated
          </h3>
          <ul className="px-[29px]">
            {activeContent.map((item, index) => (
              <li
                key={index}
                className="text-paragraph2 font-inter py-[19px] border-t  space-y-[38px]   border-gray-700 border-opacity-30"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
