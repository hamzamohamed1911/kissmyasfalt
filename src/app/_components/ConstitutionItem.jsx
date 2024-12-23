import React from "react";
import { amendments } from '../_constants';
import Image from "next/image";
import { FaEye } from "react-icons/fa"; 

const ConstitutionItem = () => {
  return (
    <div className="flex justify-center flex-wrap lg:gap-6 gap-4  py-10">
      {amendments.map((amendment, index) => (
        <div
          key={index}
          className="relative rounded-lg overflow-hidden shadow-md border-8 border-white flex flex-col items-center  bg-white h-[500px] md:w-[400px] w-auto  group"
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

          <div className="absolute inset-0 flex justify-center bg-white opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer group-hover:opacity-100">
            <div className="p-4 text-center flex flex-col justify-evenly">
          <div className="gap-1">
          <h3 className="md:text-3xl text-2xl font-semibold text-[#d71515] block">
                {amendment.head}
              </h3>
              <h3 className=" text-2xl font-semibold text-[#d71515] block">
                {amendment.title}
              </h3>
          </div>
              <p className="text-xl text-primary">{amendment.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConstitutionItem;
