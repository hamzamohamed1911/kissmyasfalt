import Image from "next/image";
import React from "react";
import { founder1, founder2 } from "../../../public";
import FoundersMessages from "./FoundersMessages";

const Founders = () => (
  <section id="Founders" className="w-full md:px-0 px-4 py-20 ">
    <div className="container w-full">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        
        <div className="lg:col-span-2 col-span-1">
          <h2 className="lg:text-5xl text-4xl text-[#d71515] font-bold mb-6 text-start font-urban">
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
          <div className="flex justify-center gap-4 text-primary">
            <div className="text-center rounded-full space-y-2 text-md">
              <Image
                className="rounded-full  w-28 border-[#d71515] border-r-4 border-b-8 bg-cover mx-auto"
                priority
                alt="image of Mr. Shady Shebl"
                src={founder1}
              />
              <p>
                <strong>Shady Shebl</strong>
              </p>
              <p>Founder & Creative Director</p>
            </div>
            <div className="text-center space-y-2 rounded-full text-md">
              <Image
                className="rounded-full w-28 border-[#d71515] border-r-4 border-b-8 bg-cover mx-auto"
                priority
                alt="image of Mr. Mo Shalaby"
                src={founder2}
              />
              <p>
                <strong>Mo Shalaby</strong>
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
