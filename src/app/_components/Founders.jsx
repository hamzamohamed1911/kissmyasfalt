import Image from "next/image";
import React from "react";
import { founder1, founder2 } from "../../../public";
import FoundersMessages from "./FoundersMessages";

const Founders = () => (
  <section id="Founders" className="w-full md:px-0 px-4 py-20 ">
    <div className="container w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        
        <div className="lg:col-span-2 col-span-1">
          <h2 className="md:text-5xl text-3xl text-[#d71515] font-bold mb-6 text-start font-urban left-3">
          Founders Messages:
          </h2>
          <p className="text-xl leading-relaxed mb-6 text-[#868686]">
            As the founders of this platform, we want to personally thank you
            for joining us in this transformative journey. We are a community
            committed to fairness, transparency, and empowerment.
          </p>
          <p className="text-lg text-center my-6 text-primary">
            Together, we are redefining rideshare. Thank you for being part of
            the revolution With gratitude and determination.
          </p>
          <div className="flex justify-center md:gap-6 gap-4 text-primary">
            <div className="text-center space-y-2 flex justify-center items-center flex-col rounded-full text-md">
              <Image
                className="rounded-full md:w-36  md:h-36 h-28 w-28 border-[#d71515] border-r-4 border-b-8 object-fit		"
                priority
                alt="image of Mr. Shady "
                src={founder1}
              />
              <p>
                <strong>Shady</strong>
              </p>
              <p>Founder & Creative Director</p>
            </div>
            <div className="text-center space-y-2 flex justify-center items-center flex-col rounded-full text-md">
              <Image
                className="rounded-full md:w-36  md:h-36 h-28 w-28 border-[#d71515] border-r-4 border-b-8 object-fill		"
                priority
                alt="image of Mr. Mo "
                src={founder2}
              />
              <p>
                <strong>MOE</strong>
              </p>
              <p>Co-founder & CEO</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3 col-span-1">
          <FoundersMessages />
        </div>
      </div>
    </div>
  </section>
);

export default Founders;
