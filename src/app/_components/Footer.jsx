import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
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
          <div className="flex justify-center md:justify-end md:gap-6 gap-3 my-4 md:text-3xl text-2xl me-4 md:me-6">
            <FaFacebookF className="text-[#868686] hover:text-white cursor-pointer" />
            <FaInstagram className="text-[#868686] hover:text-white cursor-pointer" />
            <FaSquareXTwitter className="text-[#868686] hover:text-white cursor-pointer" />
            <FaWhatsapp className="text-[#868686] hover:text-white cursor-pointer" />
          </div>
        </div>

        <hr className="my-4 border-gray-200 sm:mx-auto dark:border-gray-700 md:my-6" />
        <div className="flex md:justify-between flex-wrap justify-center space-y-6 items-center">
          <span className="block text-sm text-white sm:text-center dark:text-gray-400">
            © 2024
            <a href="https://offer.evyx.net/" className="">
              EVYX
            </a>
            . All Rights Reserved.
          </span>
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

          <div className="flex flex-row gap-3 md:gap-4 justify-center lg:justify-start items-center lg:items-start md:my-6 my-4">
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
                className="h-14 w-auto  "
                src={googlePlayIcon}
                alt="Download on Google Play"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
