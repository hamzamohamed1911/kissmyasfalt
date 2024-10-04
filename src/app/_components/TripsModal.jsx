import React from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import motion
import { TripBg } from "../../../public";

const TripsModal = ({ isOpen, onClose, title, subTrips }) => {
  if (!isOpen) return null;

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
    },
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center p-4 text-primary"
      onClick={onClose}
    >
      <motion.div
        className="bg-[#f0ebe5] rounded-lg shadow-lg w-full max-w-xl overflow-auto max-h-screen"
        onClick={(e) => e.stopPropagation()}
        variants={modalVariants} 
        initial="hidden" 
        animate="visible" 
        exit="exit" 
        transition={{ duration: 0.8 }} 
      >
        <div className="bg-[#7c2308f2] relative rounded-t-lg">
          <div className="absolute inset-0 z-0"></div>

          <Image
            src={TripBg}
            alt={title}
            className="w-full h-20 object-cover rounded-t-lg z-10"
          />

          <h2 className="md:text-3xl text-2xl font-bold text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
            {title}
          </h2>
        </div>

        <div className="p-4">
          <div className="space-y-6">
            {subTrips.map((subTrip, index) => (
              <div
                key={index}
                className="border grid grid-cols-5  border-gray-300 rounded-lg md:p-4 p-3 bg-white shadow-md  flex-col md:flex-row gap-4"
              >
                <Image
                  src={subTrip.subTripImage}
                  alt={subTrip.type}
                  className="w-full col-span-2  lg:h-48 md:h-40 h-36 object-cover rounded-lg"
                />

                <div className="flex-1 col-span-3">
                  <h3 className=" lg:text-3xl md:text-2xl text-xl font-semibold md:mt-2 mt-1">{subTrip.type}</h3>
                  <p className="md:text-lg text-sm text-gray-600 md:mt-2 mt-1">
                    {subTrip.description}
                  </p>
                  <p className="lg:text-xl md:text-lg text-md mt-2 text-end">
                    Estimated cost: <strong> {subTrip.price}$</strong>
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <button
              onClick={onClose}
              className="bg-[#7c2308f2] hover:bg-[#6b1e1e] text-white py-2 px-4 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TripsModal;
