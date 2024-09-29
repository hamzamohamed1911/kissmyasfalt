import Image from "next/image"; 
import {
  FaMoneyBillWave,
  FaCar,
  FaStar,
  FaUserShield,
  FaUsers,
  FaTrophy,
} from "react-icons/fa"; // Example icons
import { commonImg, driver, rider } from "../../../public";

const WIIFM = () => {
  return (
    <section
      id="wifm"
      className="w-full md:px-0 px-4 bg-[#f0ebe5]  h-auto py-12"
    >
      <div className="container flex flex-col items-center justify-center w-full h-full space-y-12">
        <h1 className="text-[#d71515] lg:text-6xl text-4xl font-bold leading-snug text-center mb-8">
          What’s In It For Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* Drivers Card */}
          <div className="relative bg-white rounded-lg p-6 lg:h-[400px] h-full text-[#d71515] shadow-lg flex flex-col justify-between transition duration-500 ease-in-out grayscale-0 hover:grayscale">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src={rider}
                alt="Drivers Background"
                fill
                style={{ objectFit: 'cover' }} 
                className="opacity-15 bg-center"
              />
            </div>
            {/* Centered Car Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#d71515] rounded-full p-5 shadow-lg z-10">
              <FaCar className="text-5xl text-white" />
            </div>
            <h2 className="text-3xl font-bold relative z-10 mb-4 mt-12 text-center">
              For Drivers
            </h2>
            <ul className="space-y-4 text-[#868686] relative z-10 text-xl">
              <li className="flex space-x-3">
                <FaMoneyBillWave className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Maximum Financial Benefit: Drivers keep 90% of the service
                charge.
              </li>
              <li className="flex space-x-3">
                <FaCar className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                True Freedom: Unlimited choice in trips and flexibility in
                stay-in boundaries.
              </li>
              <li className="flex space-x-3">
                <FaStar className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Control over fare and mileage preferences.
              </li>
              <li className="flex space-x-3">
                <FaTrophy className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Reward System: Performance-based rewards for top performers.
              </li>
            </ul>
          </div>

          {/* Riders Card */}
          <div className="relative bg-white rounded-lg p-6 lg:h-[400px] h-full text-[#d71515] shadow-lg flex flex-col justify-between transition duration-500 ease-in-out grayscale-0 hover:grayscale">
            <div className="absolute inset-0 rounded-lg overflow-hidden ">
              <Image
                src={driver}
                alt="Riders Background"
                fill
                style={{ objectFit: 'cover' }} 
                className="opacity-15 bg-center"
              />
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#d71515] rounded-full p-5 shadow-lg z-10">
              <FaUsers className="text-5xl text-white" />
            </div>
            <h2 className="text-3xl font-bold relative z-10 mb-4 mt-12 text-center">
              For Riders
            </h2>
            <ul className="space-y-4 text-[#868686] relative z-10 text-xl">
              <li className="flex ">
                <FaMoneyBillWave className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Predictable and Fair Pricing: Consistent payment structure.
              </li>
              <li className="flex ">
                <FaCar className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Enhanced Experience: Reduced cancellations, faster trip
                matching.
              </li>
              <li className="flex ">
                <FaUsers className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Rewards to be shared: Drivers reward riders for positive
                engagement.
              </li>
              <li className="flex ">
                <FaCar className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
                Diverse Ride Options to suit different needs.
              </li>
            </ul>
          </div>
        </div>

        {/* Common Benefits */}
        <div className="relative bg-white w-full rounded-lg p-8 mt-12 shadow-md text-center ">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
          <Image
        src={commonImg}
        alt="common Background"
        fill
        style={{ objectFit: 'cover' }} 
        className="opacity-15 bg-center"
      />
          </div>
          <h3 className="text-3xl font-bold text-center mb-6 text-[#d71515]">
            Common Benefits
          </h3>
          <ul className="space-y-6 text-[#868686] text-xl">
            <li className="flex  space-x-3">
              <FaUserShield className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
              Safety: Both riders and drivers undergo background checks.
            </li>
            <li className="flex  space-x-3">
              <FaUsers className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
              Customer Service Control: Users act as a jury and judge in
              disputes.
            </li>
            <li className="flex  space-x-3">
              <FaTrophy className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
              R&D Participation: Contribute ideas to shape the future of the
              platform.
            </li>
            <li className="flex  space-x-3">
              <FaStar className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
              Second Chances: Opportunity for users to redeem themselves and
              rebuild their lives.
            </li>
            <li className="flex  space-x-3">
              <FaTrophy className="text-2xl w-8 mr-3 text-[#d71515] shrink-0" />
              Groundbreaking incentive system: Mega rewards for contributing to
              the platform.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WIIFM;
