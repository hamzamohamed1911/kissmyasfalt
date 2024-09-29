"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaCirclePlus } from "react-icons/fa6";
import { motion } from "framer-motion";
import TripsModal from "./TripsModal";
import { TripsItemArr } from "../_constants";

const TripsItem = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTrip, setCurrentTrip] = useState(null);

  const openModal = (trip) => {
    setCurrentTrip(trip);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {TripsItemArr.map((trip, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md border bg-white relative w-full lg:w-[400px] md:w-[350px] h-auto group"
          >
            <div className="bg-white w-full h-[80%] overflow-hidden p-3 relative">
              <Image
                src={trip.coverImage}
                alt={trip.title}
                className="w-full h-full object-center transition duration-500 ease-in-out grayscale group-hover:grayscale-0 rounded-lg"
              />
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100"
              >
                <button onClick={() => openModal(trip)}>
                  <FaCirclePlus className="text-[#d71515] bg-white rounded-full text-6xl" />
                </button>
              </motion.div>
            </div>
            <div className="p-4 flex items-center">
              <h3 className="text-2xl font-semibold text-[#d71515] text-start">
                {trip.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {currentTrip && (
        <TripsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          {...currentTrip} 
        />
      )}
    </div>
  );
};

export default TripsItem;
