import React from "react";
import { amendments } from '../_constants';
import Image from "next/image";
import { FaEye } from "react-icons/fa"; 

const ConstitutionItem = () => {
  return (
    <div className="flex justify-center flex-wrap lg:gap-6 gap-4 py-10">
      {amendments.map((amendment, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md border-8 border-white flex flex-col items-center  bg-white h-[500px] group"
        >
          <Image
            src={amendment.coverImage}
            alt={amendment.title}
            className="w-full h-full object-cover transition duration-500 ease-in-out grayscale "
          />
          
          <div className="absolute inset-0 flex items-center justify-center ">
            <div className="text-[#d71515] rounded-3xl bg-white opacity-60 p-3 flex items-center justify-center space-x-2">
              <FaEye className="text-2xl" /> 
            </div>
          </div>

          <div className="absolute inset-0 flex items-center justify-center bg-white opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer group-hover:opacity-100">
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-[#d71515]">
                {amendment.title}
              </h3>
              <p className="text-lg text-primary">{amendment.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConstitutionItem;
