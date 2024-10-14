"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

import MobileMenu from "./MobileMenu";
import { links } from "../_constants";
import Image from "next/image";
import { Logo } from "../../../public";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <header
      className={` text-black md:px-14 px-4 fixed w-full z-20 transition-all duration-300 bg-[#fbf9f5] font-urban ${
        scrolling ? "shadow-md " : ""
      }`}
    >
      <nav className="flex items-center justify-between h-[70px] w-full max-w-screen-xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2 transition-transform duration-300 transform hover:scale-110">
            <Image alt="kiss my asfalt" className="w-auto h-16" src={Logo}/>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex gap-10 items-center text-2xl font-semibold text-[#868686]">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                className="transition-transform transform duration-300 hover:text-[#d71515]"
                href={link.href}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <MobileMenu />
      </nav>
    </header>
  );
}
