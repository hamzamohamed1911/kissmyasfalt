"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Driver from "./Driver";
import Rider from "./Rider";

const Features = () => {
  const [activeTab, setActiveTab] = useState("driver");

  const tabVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <section id="features" className="w-auto h-auto pt-10 bg-[#d71515]">
      <div className="flex items-center flex-col justify-center container w-full h-auto py-8">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white mb-8 text-center font-urban leading-10">
          Features
        </h1>

        <div className="flex mb-6">
          <button
            className={`px-8 py-4 md:text-2xl text-xl font-bold transition-all duration-400 ease-in-out ${
              activeTab === "driver"
                ? "bg-white text-[#d71515] shadow-xl cursor-text"
                : "bg-transparent text-white hover:scale-125 duration-300 ease-in-out"
            } rounded-l-lg`}
            onClick={() => setActiveTab("driver")}
          >
            Driver
          </button>
          <button
            className={`px-8 py-4 md:text-2xl text-xl font-bold transition-all duration-400 ease-in-out ${
              activeTab === "rider"
                ? "bg-white text-[#d71515] shadow-xl cursor-text"
                : "bg-transparent text-white duration-300 ease-in-out hover:scale-125"
            } rounded-r-lg`}
            onClick={() => setActiveTab("rider")}
          >
            Rider
          </button>
        </div>

        <motion.div
          className="w-full"
          key={activeTab}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={tabVariants}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "driver" ? (
            <Driver  />
          ) : (
            <Rider  />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
