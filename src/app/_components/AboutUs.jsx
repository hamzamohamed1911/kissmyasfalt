import Image from "next/image";
import { aboutUSImg } from "../../../public";
import {

  FaExclamationCircle,
  FaUsersCog,
  FaHandsHelping,
} from "react-icons/fa";
import { GiMoneyStack } from "react-icons/gi";

import { FaRocket } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <section
      id="about"
      className=" w-full md:px-0 px-4    bg-[#f0ebe5]   h-auto "
    >
    <div className=" md:flex flex-col lg:flex-row items-center justify-between  container">
        {/* Image Section */}
        <div className="lg:w-1/2 my-8 ">
        <div className="my-8 flex justify-center lg:justify-start relative">
          <Image
            alt="About Us Image"
            className="w-full max-w-md lg:max-w-md xl:max-w-lg shadow-lg grayscale  transition duration-500 ease-in-out  hover:scale-110  rounded-full "
            priority
            src={aboutUSImg}
          />
          <div className="absolute left-[15px] top-[-45px] rounded-full md:w-40 md:h-40 h-32 w-32 bg-white shadow-md flex items-center justify-center">
            <div className="text-center space-y-3 ">
              <h1 className="md:text-5xl text-4xl text-red-600 font-extrabold">3M</h1>
              <h1 className="text-gray-400">Users</h1>
            </div>
          </div>

          <div className="absolute left-[5px] bottom-[-30px] rounded-full md:w-52 md:h-52 h-36 w-36 bg-red-600 shadow-md flex items-center justify-center text-white">
            <div className="text-center p-6 space-y-3">
              <h1 className="md:text-6xl text-5xl font-extrabold">25+</h1>
              <h1 className="md:text-lg text-sm">Years of comic journey</h1>
            </div>
          </div>
        </div>
      </div>

      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left">
          <div className="mb-6 mx-12">
            <h1 className="relative text-2xl text-[#d71515] lg:text-4xl font-bold leading-snug text-center lg:text-left lg:mb-6 mb-2">
              About Us
            </h1>
            <p className="text-xl leading-relaxed mb-4">
              <FaRocket className="inline mr-2 text-2xl text-[#d71515]" />
              <strong>Breaking the Chains of Rideshare Exploitation:</strong>
              Transportation is essential—whether you're commuting, visiting loved ones, or enjoying your weekend. 
              Yet, the rideshare industry has been tainted by monopolies and greed, turning a necessary service into a miserable experience.
            </p>
            <p className="text-xl leading-relaxed mb-4">
              <FaExclamationCircle className="inline mr-2 text-2xl text-[#d71515]" />
              <strong>We've Had Enough:</strong> Riders and drivers alike have voiced their frustrations about high costs, poor support, and unfair practices.
            </p>
            <p className="text-xl leading-relaxed mb-4">
              <FaUsersCog className="inline mr-2 text-2xl text-[#d71515]" />
              <strong>Handing Power Back:</strong> Users drive our innovation: You suggest, we develop. 
              Drivers choose their ride preferences, and riders choose their drivers.
            </p>
            <p className="text-xl leading-relaxed mb-4">
              <GiMoneyStack className="inline mr-2 text-2xl text-[#d71515]" />
              <strong>Transparency:</strong> Clear pricing, no hidden fees, and no deception.
            </p>
       
          </div>
        </div>
    </div>
    </section>
  );
};

export default AboutUs;
