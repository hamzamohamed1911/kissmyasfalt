import React from "react";
import ConstitutionItem from "./ConstitutionItem";

const Constitution = () => {
  return (
    <section
      id="constitution"
      className="w-full h-full md:px-0 px-4 py-20 bg-[#d71515]"
    >
      <div className="flex items-center flex-col justify-center container w-full  h-auto py-8">
      <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white mb-8 text-center font-urban">
        The Constitution of KMA
        </h1>
        <ConstitutionItem />
      </div>
    </section>
  );
};

export default Constitution;
