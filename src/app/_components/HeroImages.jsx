"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImages = ({ heroImg1, heroImg2 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 15;
    const y = (window.innerHeight / 2 - e.clientY) / 15;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative hidden lg:w-1/2 lg:flex justify-end items-center h-full"
      onMouseMove={handleMouseMove}
    >

      <motion.div
        className="absolute grayscale"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        
        {/* First Image with red shadow */}
        <Image
          src={heroImg1}
          alt="Comic Book Image 1"
          className="xl:w-[480px] lg:w-[560px] w-auto h-auto rounded-sm shadow-lg rotate-6 absolute z-10 border-white border-[12px] shadow-[#d71515]"
          layout="intrinsic"
        />
        
        <Image
          src={heroImg2}
          alt="Comic Book Image 2"
          className="xl:w-[480px] lg:w-[450px] w-auto  rounded-sm shadow-lg border-white border-[12px] shadow-[#0A3161]"
          layout="intrinsic"
        />
      </motion.div>
    </div>
  );
};

export default HeroImages;
