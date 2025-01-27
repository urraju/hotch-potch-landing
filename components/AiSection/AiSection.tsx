// components/AiSection.tsx
import Image from "next/image";
import frame from "@/public/Image/frame.png";
import card2 from "@/public/Image/card-2.png";
export default function AiSection() {
  return (
    <section className="max-w-[1261px]  mx-auto mt-[171px] overflow-x-hidden md:overflow-x-auto ">
      {/* top section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-[218px] items-center justify-center">
        {/* Left Section */}
        <div className="relative">
          <div className=" px-[27px] py-[17px] overflow-y-hidden  max-w-[406px] max-h-[450px] bg-white text-black rounded-[10px] shadow-md">
            <h3 className="font-semibold text-lg font-inter">Results</h3>
            <p className="mt-1 text-sm text-[#818488] font-inter">
              Here's what our AI came up with.
            </p>
            <div className="mt-[20px] space-y-4">
              {/* content part one  */}
              <div className="mt-[20px] bg-[#f3f5fb] rounded-[10px] py-[14px] px-[16px]">
                <p className="text-sm leading-[20px] font-inter">
                  {" "}
                  Pain: You are an e-commerce business, and you want to sell
                  your products all over the country, but you are confused about
                  how to handle sales tax.
                </p>
                <p className="text-sm leading-[20px] font-inter mt-5">
                  {" "}
                  Agitate: You have no idea how much sales tax to charge your
                  customers in each state.
                </p>
                <p className="text-sm leading-[20px] font-inter mt-5">
                  {" "}
                  Agitate: You have no idea how much sales tax to charge your
                  customers in each state.
                </p>
              </div>
              {/* content part two  */}
              <div className="mt-[17px] bg-[#f3f5fb] rounded-[10px] py-[14px] px-[16px]">
                <p className="text-sm leading-[20px] font-inter">
                  {" "}
                  Pain: e-commerce business owners are struggling to keep up
                  with the ever changing sales tax laws.
                </p>
                <p className="text-sm leading-[20px] font-inter mt-5">
                  {" "}
                  Agitate: Sales tax is a complicated, confusing and expensive
                  nightmare for e-commerce business owners.
                </p>
                <p className="text-sm leading-[20px] font-inter mt-5">
                  {" "}
                  Agitate: You have no idea how much sales tax to charge your
                  customers in each state.
                </p>
              </div>
              <div>
                <p className="font-bold text-sm">Solution:</p>
                <p className="text-sm">
                  Use TaxSol, our full-stack solution, to manage your sales tax.
                </p>
              </div>
            </div>
          </div>
          {/* frame  */}
          <div className="absolute w-full -bottom-[10px] left-[140px]">
            <Image src={frame} alt="frame" />
          </div>
        </div>

        {/* Right Section */}
        <div className="">
          <h2 className="text-3xl font-semibold font-outfit leading-[48px] md:text-[42px] ">
            Create content efficiently and quickly with great AI writing tools
          </h2>
          <p className="text-paragraph1 text-[18px] leading-[28px] mt-[31px]">
            150k+ users. No Credit Card Required. Pro designs and writing at no
            cost. Start for free. AI Writer Tool | Generate text for ecom,
            social media, website, sales, blogs, etc.
          </p>
          <button className="w-[214px] mt-[42px] h-[60px] rounded-[5px] font-inter bg-gradient-to-l hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all from-gradientR to-gradientL py-[16px] px-[20px] text-right">
            Start 14 Days Free Trial
          </button>
        </div>
      </div>

      {/* bottom section  */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-[144px] md:gap-[218px] items-center justify-center">
        {/* Left Section */}
        <div className="relative">
          <div className="">
            <h2 className="text-3xl font-semibold font-outfit leading-[48px] md:text-[42px] ">
              Write what you want to convey through clear, & authentic writing
            </h2>
            <p className="text-paragraph1 text-[18px] leading-[28px] mt-[31px]">
              AI-Writer is the most accurate content generation platform and
              writing tool that helps you transform your text into a completely
              personalized.
            </p>
            <button className="w-[214px] mt-[42px] h-[60px] rounded-[5px] font-inter bg-gradient-to-l hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all from-gradientR to-gradientL py-[16px] px-[20px] text-right">
              Start 14 Days Free Trial
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="">
          <Image src={card2} alt="card" />
        </div>
      </div>
    </section>
  );
}
