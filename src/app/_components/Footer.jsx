import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { appStore, googlePlay, Logo } from "../../../public";

const Footer = () => {
  return (
    <footer className="bg-[#2a2a2a]   dark:bg-gray-900 font-urban">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
        <Link className="flex items-center  transition-transform transform hover:scale-105" href="/">
            <Image alt="kiss my asfalt" className="w-full h-12"  priority src={Logo}/>
        </Link>
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
        </div>
        <div className="flex flex-col md:flex-row gap-6 md:gap-12 justify-center lg:justify-start items-center lg:items-start md:my-12 my-6">
            <button
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full inline-block font-semibold transition-transform transform hover:scale-110 bg-transparent "
            >
              <Image
                priority
                className="h-auto w-48  "
                src={appStore}
                alt="Download on the App Store"
              />
            </button>
            <button
              href="https://www.google.com/play"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-semibold transition-transform transform hover:scale-110 "
            >
              <Image
                priority
                className="h-auto w-48 "
                src={googlePlay}
                alt="Download on Google Play"
              />
            </button>
          </div>
        <div className="flex justify-center md:justify-end gap-3 my-4 text-2xl me-4 md:me-6">
          <FaFacebookF className="text-[#868686] hover:text-white cursor-pointer" />
          <FaInstagram className="text-[#868686] hover:text-white cursor-pointer" />
          <FaSquareXTwitter className="text-[#868686] hover:text-white cursor-pointer" />
          <FaWhatsapp className="text-[#868686] hover:text-white cursor-pointer" />
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-white sm:text-center dark:text-gray-400">
          © 2024
          <a href="https://offer.evyx.net/" className="">
            EVYX
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
