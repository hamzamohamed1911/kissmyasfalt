"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { links } from "../_constants";
import Image from "next/image";
import { Logo } from "../../../public";

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  
  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    const currentPath = window.location.pathname;
    setActiveLink(currentPath); 
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.5, 
      }
    );

    links.forEach((link) => {
      const section = document.getElementById(link.href.substring(1)); 
      if (section) observer.observe(section);
    });

    return () => {
      observer.disconnect(); 
      window.removeEventListener('scroll', handleScroll);
    };
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
      className={`text-black md:px-14 px-4 fixed w-full z-20 transition-all duration-300 bg-[#fbf9f5] font-urban ${
        scrolling ? "shadow-md " : ""
      }`}
    >
      <nav className="flex items-center justify-between h-[70px] w-full max-w-screen-xl mx-auto">
        <Link href="/">
          <div className="flex items-center gap-2 transition-transform duration-300 transform hover:scale-110">
            <Image alt="kiss my asfalt" className="w-auto h-16" src={Logo} />
          </div>
        </Link>

        <ul className="hidden lg:flex gap-10 items-center text-2xl font-semibold text-[#868686]">
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                onClick={() => handleLinkClick(link.href)} 
                className={`transition-transform transform duration-300 ${
                  activeLink === link.href ? 'text-[#d71515]' : 'text-[#868686]'
                } hover:text-[#d71515]`}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>

        <MobileMenu />
      </nav>
    </header>
  );
}
