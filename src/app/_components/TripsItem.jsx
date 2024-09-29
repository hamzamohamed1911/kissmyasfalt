"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import TripsModal from "./TripsModal";
import { TripsItemArr } from "../_constants";
import { BsArrowUpRightCircle } from "react-icons/bs";

const TripsItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);
  const [showButton, setShowButton] = useState(null); 

  const openModal = (trip) => {
    setCurrentTrip(trip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleShowButton = (index) => {
    if (showButton === index) {
      setShowButton(null); 
    } else {
      setShowButton(index); 
    }
  };

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid xl:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-6 justify-center">
        {TripsItemArr.map((trip, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden shadow-md border bg-white relative w-full lg:w-[400px] md:w-[350px] h-auto group"
            onMouseEnter={() => setShowButton(index)} 
            onMouseLeave={() => setShowButton(null)} 
            onClick={() => toggleShowButton(index)} 
          >
            <div className="bg-white w-full h-[80%] overflow-hidden p-3 relative">
              <Image
                src={trip.coverImage}
                alt={trip.title}
                className="w-full h-full object-center transition duration-500 ease-in-out grayscale group-hover:grayscale-0 rounded-lg"
              />
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{
                  y: showButton === index ? 0 : 100,
                  opacity: showButton === index ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <button onClick={() => openModal(trip)}>
                  <FaCirclePlus className="text-[#d71515] bg-white rounded-full text-6xl" />
                </button>
              </motion.div>
            </div>
            <div className="flex items-center justify-between p-6 text-[#d71515]">
              <h3 className="font-semibold text-start lg:text-3xl text-2xl">
                {trip.title}
              </h3>
              <BsArrowUpRightCircle
                size={50}
                className={`text-3xl transition-transform duration-300 ease-in-out transform cursor-pointer ${
                  showButton === index ? "rotate-45 bg-[#d71515] rounded-full text-white" : "" 
                }`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {currentTrip && (
        <TripsModal isOpen={isModalOpen} onClose={closeModal} {...currentTrip} />
      )}
    </div>
  );
};

export default TripsItem;
