"use client";
import React, { memo, useEffect, useState } from "react";

const Countdown = memo(() => {
  const targetDate = new Date("2025-01-01T00:00:00"); // Target date
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1
        className="font-bold md:text-5xl text-4xl text-center leading-normal flex justify-center font-urban mb-6"
        style={{
          color: "#d71515",
          textShadow: "4px 4px 0px #3C3B6E",
        }}
      >
        Reinventing the Wheel in
      </h1>

      <div className="flex md:space-x-6 space-x-4">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div
            key={unit}
            className="flex flex-col relative justify-center items-center lg:w-24 lg:h-24 md:w-20 md:h-20 w-16 h-16 shadow-lg rounded-lg transform transition-transform duration-300 hover:scale-105 calendar-card"
          >


            {/* Header */}
            <div className="bg-gray-200 w-full p-1 text-center rounded-t-md">
              <span className="text-gray-600 uppercase font-semibold md:text-sm text-xs">
                {unit}
              </span>
            </div>

            {/* Body */}
            <div className="flex items-center justify-center  border-[1px] bg-white w-full h-full rounded-b-md">
              <span
                className="lg:text-5xl md:text-4xl text-3xl font-bold"
                style={{
                  color: "#505092",
                  textShadow: "3px 3px 0 #2F2F5D",
                }}
              >
                {value !== undefined ? value : "0"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Countdown;
