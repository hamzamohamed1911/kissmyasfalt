"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      
      setScrollPosition(scrolled);
      
      if (scrollTop > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (isVisible) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`fixed bottom-20 right-4 h-20 w-20 flex items-center justify-center cursor-pointer shadow-md transition-opacity duration-300 z-50 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(#d71515 ${scrollPosition}%, transparent 0%)`, 
        borderRadius: "50%", 
        padding: "6px", 
      }}
    >
      {/* Inner div with solid white background */}
      <div className="bg-white h-full w-full rounded-full flex items-center justify-center">
        <FaArrowUp className="text-[#d71515]" size={30} />
      </div>
    </div>
  );
};

export default ScrollToTopButton;
