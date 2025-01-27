// components/WritingTools.tsx
import Image from "next/image";

const tools = [
  {
    title: "Blog Headlines",
    description: "Write a better blog title with our A.I tool.",
    icon: "/icon/icon-1.svg",
  },
  {
    title: "Blog Intros",
    description: "Generate a paragraph of blog content using Blog Intros tool.",
    icon: "/icon/icon-2.svg",
  },
  {
    title: "Blog Outline",
    description: "Need an attention-grabbing headline for your article?",
    icon: "/icon/icon-3.svg",
  },
  {
    title: "Blog Conclusions",
    description: "Write better conclusions with A.I writing tool.",
    icon: "/icon/icon-4.svg",
  },
  {
    title: "Content Rewriter",
    description: "Get A.I writer to rewrite your sentence in a different way.",
    icon: "/icon/icon-1.svg",
  },
  {
    title: "Product Description",
    description: "Need an attention-grabbing headline for your article?",
    icon: "/icon/icon-2.svg",
  },
  {
    title: "PAS Copywriting Formula",
    description: "Get A.I writer to rewrite your sentence in a different way.",
    icon: "/icon/icon-3.svg",
  },
  {
    title: "Company About Us",
    description: "Write a better blog title with our A.I tool.",
    icon: "/icon/icon-4.svg",
  },
];

export default function WritingTools() {
  return (
    <section className="mt-[153px] max-w-[1261px]  mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-[42px] font-semibold font-outfit">
          54 exciting writing tools
        </h2>
        <p className="mt-[26px] text-paragraph1 text-[18px] leading-[28px]">
          AI engines take information from various sources and read <br /> them
          like a human would do.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[26px] mt-[61px]">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-[#282A37] py-[25px] px-[22px] rounded-[10px] shadow-md flex items-start space-x-[10px]"
          >
            <Image
              src={tool.icon}
              alt={tool.title}
              width={34}
              height={34}
              className="flex-shrink-0 mt-1"
            />
            <div>
              <h3 className="text-[16px] font-inter text-paragraph2 font-semibold">
                {tool.title}
              </h3>
              <p className="text-paragraph1 text-sm font-inter mt-2">
                {tool.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-[55px]">
        <a
          href="#"
          className="text-paragraph2 font-inter text-[16px] font-semibold"
        >
          See all 54 available tools
        </a>
      </div>
    </section>
  );
}
