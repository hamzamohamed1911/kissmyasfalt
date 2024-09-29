"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; 

const Accordion = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white lg:p-6 p-4 mb-4 rounded-lg shadow-md text-[#d71515]">
      <h2
        className="md:text-3xl text-lg font-bold flex items-center cursor-pointer mb-4"
        onClick={toggleAccordion}
      >
        {icon} {title}
        <FaChevronDown
          className={`ml-auto transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </h2>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-gray-700 pt-2">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
