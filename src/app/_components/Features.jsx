"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Driver from "./Driver";

const Features = () => {
  const [activeTab, setActiveTab] = useState("driver");
  const [riderResult, setRiderResult] = useState(null);
  const [rideTime, setRideTime] = useState("");
  const [mileage, setMileage] = useState("");
  const [rideTypeRider, setRideTypeRider] = useState("");

  const tabVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  // Function to handle Driver calculation


  // Function to handle Rider calculation
  const calculateRider = () => {
    if (rideTime && mileage && rideTypeRider) {
      const result = `Your ride time is ${rideTime} mins with ${mileage} km for ${rideTypeRider} ride type.`;
      setRiderResult(result);
    } else {
      setRiderResult("Please fill in all fields.");
    }
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
            <div className="bg-[#fbf9f5] p-6 rounded-lg shadow-lg">
          
              {/* Driver Form */}
             <Driver/>
            </div>
          ) : (
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-center text-3xl font-bold mb-4 text-primary">
                Rider Features
              </h2>

              {/* Rider Form */}
              <form>
                <div className="flex flex-col md:flex-row gap-6 mb-6">
                  <div className="mb-4 md:w-1/2">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Ride Time (in minutes)
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter ride time"
                      value={rideTime}
                      onChange={(e) => setRideTime(e.target.value)}
                    />
                  </div>

                  <div className="mb-4 md:w-1/2">
                    <label className="block text-lg font-medium text-gray-700 mb-2">
                      Mileage
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Enter mileage"
                      value={mileage}
                      onChange={(e) => setMileage(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-lg font-medium text-gray-700 mb-2">
                    Ride Type
                  </label>
                  <select
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    value={rideTypeRider}
                    onChange={(e) => setRideTypeRider(e.target.value)}
                  >
                    <option value="" disabled>
                      Select Ride Type
                    </option>
                    <option value="broke">broke asphalt</option>
                      <option value="smart">smart asphalt</option>
                      <option value="fancy">fancy asfalt</option>
                      <option value="Hairy">Hairy asfalt</option>
                      <option value="classic">classic asphalt</option>
                      <option value="Big">Big asphalt</option>
                      <option value="naked">naked asphalt</option>
                      <option value="bad">bad asphalt</option>
                      <option value="FirstClass">First Class asphalt</option>
                  </select>
                </div>
                <button
                  type="button"
                  onClick={calculateRider}
                  className="bg-[#d71515] hover:bg-[#e24040] text-white px-6 py-3 rounded-md font-bold mt-4"
                >
                  Calculate
                </button>
                {riderResult && (
                  <div className="mt-4 p-4 bg-gray-100 rounded-md">
                    <p className="text-lg">{riderResult}</p>
                  </div>
                )}
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
