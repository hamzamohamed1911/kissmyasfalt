"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import BackgroundVideo from "./BackgroundVideo";

const HeroImages = ({ heroImg1, heroImg2 }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 15;
    const y = (window.innerHeight / 2 - e.clientY) / 15;
    setPosition({ x, y });
  };

  return (
    <div
      className="relative col-span-1 flex lg:justify-end justify-center items-center"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="grayscale"
        animate={{
          x: position.x,
          y: position.y,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
      >
        <div
          className="lg-[750px]  md:w-[430px] md:h-[730px] w-[300px]  h-[500px] rounded-sm shadow-xl rotate-6 absolute z-20 border-white border-[12px] shadow-black"
        >
          <BackgroundVideo />
        </div>

        <Image
          src={heroImg2}
          alt="Comic Book Image 2"
          className=" lg-[750px]  md:w-[450px] md:h-auto w-[300px]  h-[500px] rounded-sm shadow-lg border-white border-[12px] shadow-[#0A3161]"
          layout="intrinsic"
        />
      </motion.div>
    </div>
  );
};

export default HeroImages;
