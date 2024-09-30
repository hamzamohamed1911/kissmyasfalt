"use client";
import { useState } from "react";
import Link from "next/link";
import { links } from "../_constants";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const topVariants = {
    closed: { rotate: 0 },
    opened: { rotate: 45 },
  };
  const centerVariants = {
    closed: { opacity: 1 },
    opened: { opacity: 0 },
  };
  const buttonVariants = {
    closed: { rotate: 0 },
    opened: { rotate: -45 },
  };

  const closeMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="lg:hidden bg-[#fbf9f5]">
      <button
        className="w-10 h-8 flex flex-col justify-between z-50 relative"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <motion.div
          variants={topVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-[#868686] rounded origin-left"
        ></motion.div>
        <motion.div
          variants={centerVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-[#868686] rounded"
        ></motion.div>

        <motion.div
          variants={buttonVariants}
          animate={isOpen ? "opened" : "closed"}
          className="w-10 h-1 bg-[#868686] rounded origin-left"
        ></motion.div>
        {/*menu list*/}
      </button>
      {/* Overlay to close menu */}
      {isOpen && <div className="fixed inset-0 " onClick={closeMenu}></div>}

      {/* Mobile Menu */}
      <div
        className={`absolute top-[70px] inset-x-0 z-50 shadow-md transition-opacity duration-300 text-[#868686] bg-[#fbf9f5] py-5 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <ul className="text-3xl font-[400] text-center">
          {links.map((link, index) => (
            <li key={index} className="py-3">
              <Link
                className="transition-transform duration-300 transform hover:scale-105 hover:text-red-500"  
                href={link.href}
                onClick={() => setIsOpen((prev) => !prev)}
                >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-center  gap-3 text-2xl mt-2">
                <FaFacebookF className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
                <FaInstagram className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
                <FaSquareXTwitter className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
                <FaWhatsapp className="text-[#868686] hover:text-[#d71515] cursor-pointer" />
              </div>
      </div>
    </div>
  );
}
