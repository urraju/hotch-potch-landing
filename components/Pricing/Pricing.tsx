// components/Pricing.tsx
import React from "react";

export default function Pricing() {
  const plans = [
    {
      title: "Starter Plan",
      price: "$29",
      frequency: "/month",
      description: "This package is suitable for teams 1-15 people.",
      features: [
        "10 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "1 Year Support",
      ],
      buttonStyle:
        "border hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all border-gray-900 text-white hover:bg-gray-700",
    },
    {
      title: "Basic Plan",
      price: "$79",
      frequency: "/month",
      description: "This package is suitable for teams 1-50 people.",
      features: [
        "15 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "5 Year Support",
        "Free Custom Domain",
        "Basic Statistics",
      ],
      buttonStyle:
        "bg-gradient-to-r hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all from-gradientL to-gradientR text-white hover:opacity-90",
    },
    {
      title: "Premium Plan",
      price: "$129",
      frequency: "/month",
      description: "This package is suitable for teams 1-100 people.",
      features: [
        "20 GB Dedicated Hosting Free",
        "Best for Developers, Freelancers",
        "Unlimited Support",
        "Free Custom Domain",
        "Full Statistics",
      ],
      buttonStyle:
        "border hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all border-gray-900 text-white hover:bg-gray-700",
    },
  ];

  return (
    <section className="max-w-[1038px] mx-auto mt-[208px]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-outfit leading-[48px] md:text-[42px] font-semibold">
          Make the wise decision <br /> for your business
        </h2>
        <p className="text-paragraph1 mt-[19px] font-inter">
          Choose from our affordable 3 packages
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[67px]">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-[#282A37] rounded-[15px] p-[30px] shadow-md flex flex-col justify-between"
          >
            <div>
              <h3 className="text-[16px] font-light font-inter mb-[28px]">
                {plan.title}
              </h3>
              <div className="text-3xl text-[42px] font-outfit font-bold mb-2">
                {plan.price}
                <span className="text-[18px] font-outfit font-normal">
                  {plan.frequency}
                </span>
              </div>
              <p className="text-paragraph1 font-inter text-sm mt-[17px] leading-[20px]">
                {plan.description}
              </p>
              <h4 className="font-semibold mt-[42px] text-[16px] font-inter">
                What's included:
              </h4>
              <ul className="space-y-2 mt-[15px]">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="text-paragraph1 text-[16px] font-inter leading-[34px]"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className={`mt-[30px] w-full py-3 font-inter rounded-[10px] font-medium ${plan.buttonStyle}`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
