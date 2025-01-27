// components/Customer.tsx
import Image from "next/image";
import { FaTwitter } from "react-icons/fa";

const customers = [
  {
    name: "Darrell Steward",
    username: "@darrels",
    feedback:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: "#another",
    image: "/man-image/man-1.png",
  },
  {
    name: "Leslie Alexander",
    username: "@lesslie",
    feedback:
      "Simply the best. Better than all the rest. I'd recommend this product to beginners and advanced users.",
    tags: "#postcrafts",
    image: "/man-image/man-2.png",
  },
  {
    name: "Jenny Wilson",
    username: "@jennywilson",
    feedback:
      "This is a top-quality product. No need to think twice before making it live on the web.",
    tags: "#make_it_fast",
    image: "/man-image/man-3.png",
  },
  {
    name: "Kristin Watson",
    username: "@kristinwatson2",
    feedback:
      "Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.",
    tags: "#postcrafts",
    image: "/man-image/man-4.png",
  },
  {
    name: "Guy Hawkins",
    username: "@jennywilson",
    feedback:
      "This is a top-quality product. No need to think twice before making it live on the web.",
    tags: "#make_it_fast",
    image: "/man-image/man-5.png",
  },
  {
    name: "Marvin McKinney",
    username: "@jennywilson",
    feedback:
      "With Postcrafts, it’s quicker with the customer. The customer is more ensured of getting exactly what they ordered, and I’m all for the efficiency.",
    tags: "#dev #tools",
    image: "/man-image/man-6.png",
  },
  {
    name: "Annette Black",
    username: "@jennywilson",
    feedback:
      "You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: "#another",
    image: "/man-image/man-7.png",
  },
  {
    name: "Floyd Miles",
    username: "@jennywilson",
    feedback:
      "My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.",
    tags: "#postcrafts",
    image: "/man-image/man-8.png",
  },
];

export default function Customer() {
  return (
    <section className=" max-w-[1261px] mx-auto mt-[600px] md:mt-[214px] text-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-outfit md:text-[42px] font-semibold">
          What our customers say
        </h2>
        <p className="text-paragraph1 mt-[19px] font-inter">
          Read why thousands of marketers, writers, and <br /> entrepreneurs
          love us so much.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {customers.map((customer, index) => (
          <div
            key={index}
            className="bg-[#FFFF] text-black rounded-[5px] px-[20px] py-[25px] shadow-md space-y-4 "
          >
            <div className="flex items-center space-x-3">
              <Image
                src={customer.image}
                alt={customer.name}
                width={50}
                height={50}
                className="rounded-full"
              />
              <div className="w-full">
                <div className="flex items-center justify-between w-full">
                  <h3 className="text-[16px] font-inter font-semibold">
                    {customer.name}
                  </h3>
                  <FaTwitter className="text-[#0EA5E9] text-[17px]" />
                </div>
                <p className="text-[#12141D] text-[13px] mt-[2px]">
                  {customer.username}
                </p>
              </div>
            </div>
            <div>
              {" "}
              <p className="leading-[24px] text-[16px] mt-[25px] font-[400]">
                {customer.feedback}
              </p>
              <p className="text-[#0EA5E9] font-light p-0">{customer.tags}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
