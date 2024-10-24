import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { appStoreIcon, googlePlayIcon, Logo } from "../../../public";
const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a]   dark:bg-gray-900 font-urban">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <ul className="flex flex-wrap items-center gap-4 py-4 text-md md:text-xl font-medium text-white sm:mb-0 dark:text-gray-400">
            <li className="hover:translate-x-1 transition-transform duration-700 text-white">
              <a href="#about" className=" me-4 md:me-6 text-white">
                About
              </a>
            </li>
            <li className="hover:translate-x-1 transition-transform duration-700 text-white">
              <a href="#trips" className=" me-4 md:me-6 text-white">
                All Trips
              </a>
            </li>
            <li className="hover:translate-x-1 transition-transform duration-700 text-white">
              <a className=" me-4 md:me-6 text-white " href="#features">
              features
              </a>
            </li>
            <li className="hover:translate-x-1 transition-transform duration-700 text-white">
              <a href="#constitution" className=" me-4 md:me-6 text-white">
                constitution
              </a>
            </li>
            <li className="hover:translate-x-1 transition-transform duration-700 text-white">
              <a className=" me-4 md:me-6 text-white " href="#contact-us">
                Contact Us
              </a>
            </li>
        
          </ul>
          <Link
            className="flex items-center justify-center duration-300 transform hover:scale-110"
            href="/"
          >
            <Image
              alt="kiss my asfalt"
              className="w-auto h-24"
              priority
              src={Logo}
            />
          </Link>
        </div>

        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 md:my-6" />
        <div className="flex justify-between flex-wrap  space-y-6 items-center">
          <div className="flex  justify-center items-center gap-3 md:gap-4 ">
            <button
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full inline-block duration-300 font-semibold transition-transform transform hover:scale-110 bg-transparent "
            >
              <Image
                priority
                className="h-14 w-auto  "
                src={appStoreIcon}
                alt="Download on the App Store"
              />
            </button>
            <button
              href="https://www.google.com/play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold duration-300 transition-transform transform hover:scale-110 "
            >
              <Image
                priority
                className="h-12 w-auto  "
                src={googlePlayIcon}
                alt="Download on Google Play"
              />
            </button>
          </div>
 
          <div className="flex justify-center items-center gap-3 text-3xl mt-2">
            <a
              href="https://www.instagram.com/kissmyasfalt/profilecard/?igsh=NGF3ZTZ6bDZidjFr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram
                size={35}
                className="text-[#FFFFFF] hover:text-[#868686] cursor-pointer"
              />
            </a>

            <a
              href="https://www.tiktok.com/@kiss.my.asfalt?_t=8qknsdBcXKk&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <FaTiktok
                size={35}
                className="text-[#FFFFFF] hover:text-[#868686] cursor-pointer"
              />
            </a>
          </div>
        </div>
        <span className="block text-md text-white text-center font-urban mt-6 ">
          KISS MY ASFALT | All Rights Reserved | Powered by <a href="https://evyx.net/" className="text-red-500 hover:underline"> EVYX
          </a>  2024 ©
        </span>
      </div>
    </footer>
  );
};

export default Footer;
