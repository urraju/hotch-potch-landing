// components/Footer.tsx
import React from "react";

export default function Footer() {
  const footerLinks = [
    {
      title: "Company",
      links: ["About", "Features", "Works", "Career"],
    },
    {
      title: "Help",
      links: [
        "Customer Support",
        "Delivery Details",
        "Terms & Conditions",
        "Privacy Policy",
      ],
    },
    {
      title: "Resources",
      links: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
    {
      title: "Links",
      links: [
        "Free eBooks",
        "Development Tutorial",
        "How to - Blog",
        "Youtube Playlist",
      ],
    },
  ];

  return (
    <footer className="max-w-[1038px]  mx-auto mt-[93px] pb-[85px] ">
      <div className=" px-4 grid grid-cols-2 md:grid-cols-4 md:gap-[155px] w-max">
        {footerLinks.map((section, index) => (
          <div key={index} className="">
            <h3 className="text-[16px] font-inter font-semibold mb-4 leading-[28px]">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.links.map((link, idx) => (
                <li
                  key={idx}
                  className="text-paragraph2 text-sm font-light font-inter leading-[40px]"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
}
