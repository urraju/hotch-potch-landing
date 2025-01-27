"use client";
// components/Navbar.tsx
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { IoMenuSharp } from "react-icons/io5";
import logo from "@/public/Image/logo.png";
import Image from "next/image";
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 md:pt-[21px] pt-1">
      <div className="max-w-[1261.31px] flex items-center justify-between mx-auto h-[50px]">
        {/* Left Side: Logo and Menu */}
        <div className="flex items-center space-x-[51.18px]">
          {/* Logo */}

          <a href="/" className="flex items-center w-[78px] h-[32px]">
            <Image src={logo} alt="logo" />
          </a>

          {/* Menu */}
          <div className="hidden md:flex space-x-8 font-inter">
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Demos
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              About
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Blog
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Pages
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Contact
            </a>
          </div>
        </div>

        {/* Right Side: Buttons */}
        <div className="hidden md:flex items-center gap-[10px] ">
          <button className=" w-[92px] h-[50px] border-gray-600 py-[16px] px-[20px] border rounded-[5px] text-sm font-inter text-white ">
            Sign In 
          </button>

          <button className="w-[167px] h-[50px]  text-sm bg-gradient-to-l hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all from-gradientR to-gradientL font-inter py-[16px] px-[20px] text-white rounded-[5px] ">
            Subscribe
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="inline-flex items-center p-2 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          {isMenuOpen ? (
            <RxCross2 className="text-3xl" />
          ) : (
            <IoMenuSharp className="text-3xl" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4 border-t border-gray-200 dark:border-gray-700">
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Demos
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              About
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Blog
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Pages
            </a>
            <a href="#" className="text-gray-900 dark:text-white text-[16px]">
              Contact
            </a>
            <div className="flex items-start gap-[10px] flex-col">
              <li>
                <button className="  border-gray-600 py-[16px] px-[20px] border rounded-[5px] text-sm font-inter text-white ">
                  Sign In
                </button>
              </li>
              <li className="w-full">
                <button className="w-full  text-sm bg-gradient-to-l hover:bg-gradient-to-l hover:from-bgHoverR hover:to-bgHoverL duration-300 transition-all from-gradientR to-gradientL font-inter py-[16px] px-[20px] text-white rounded-[5px] ">
                  Subscribe
                </button>
              </li>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
