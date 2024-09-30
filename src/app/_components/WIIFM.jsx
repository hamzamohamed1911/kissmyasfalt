import Image from "next/image";
import {
  FaCar,
  FaUsers,
} from "react-icons/fa";
import { commonImg, driver, rider } from "../../../public";

const WIIFM = () => {
  return (
    <section
      id="wifm"
      className="w-full md:px-0 px-4 h-auto py-12"
    >
      <div className="container flex flex-col items-center justify-center w-full h-full space-y-12">
        <h1 className="text-[#d71515] lg:text-7xl md:text-5xl text-4xl font-bold leading-snug text-center mb-8 font-urban">
          What’s In It For Me
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* Drivers Card */}
          <div className="relative bg-white rounded-lg md:p-8 p-3  h-full text-[#d71515] shadow-lg flex flex-col  transition duration-500 ease-in-out grayscale-0 hover:grayscale">
            <div className="absolute inset-0 rounded-lg overflow-hidden">
              <Image
                src={rider}
                alt="Drivers Background"
                fill
                style={{ objectFit: "cover" }}
                className="opacity-15 bg-center"
              />
            </div>
            {/* Centered Car Icon */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#d71515] rounded-full p-5 shadow-lg z-10">
              <FaCar className="text-5xl text-white" />
            </div>
            <h2 className="text-3xl font-bold relative z-10 mb-4 mt-12 text-center text-primary">
              For Drivers
            </h2>
            <ul className="space-y-4 text-[#868686] relative z-10 lg:text-xl text-lg">
              <li className=" space-x-3">
                <strong className="text-primary">
                  Maximum Financial Benefit :
                </strong>
                You’re a small business owner, and we’ll treat you like one. You
                keep 90% of the service charge—because your hard work deserves
                real earnings
              </li>
              <li className=" space-x-3">
                <strong className="text-primary"> True Freedom : </strong> Call
                the shots—choose where you work, set your ride distance, and
                decide your fare range. No limits, just your rules. We’re
                putting the power back in your hands, where it belongs.
              </li>
              <li className=" space-x-3">
                <strong className="text-primary"> Reward System : </strong>
                Performance based, not by location. We won’t push you to chase
                endless short trips and ignore the longer ones for pennies. You
                work smart, you get rewarded fairly—simple as that
              </li>
            </ul>
          </div>

          {/* Riders Card */}
          <div className="relative bg-white rounded-lg md:p-8 p-3  h-full text-[#d71515] shadow-lg flex flex-col  transition duration-500 ease-in-out grayscale-0 hover:grayscale">
            <div className="absolute inset-0 rounded-lg overflow-hidden ">
              <Image
                src={driver}
                alt="Riders Background"
                fill
                style={{ objectFit: "cover" }}
                className="opacity-15 bg-center"
              />
            </div>
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#d71515] rounded-full p-5 shadow-lg z-10">
              <FaUsers className="text-5xl text-white" />
            </div>
            <h2 className="text-3xl font-bold relative z-10 mb-4 mt-12 text-center text-primary">
              For Riders
            </h2>
            <ul className="space-y-4 text-[#868686] relative z-10 lg:text-xl text-lg">
              <li>
                <strong className="text-primary">Fair pricing: </strong>
                no surge, your battery level won’t “allegedly” raise the
                price—only traffic will. No tricks, just transparency
              </li>
              <li>
                <strong className="text-primary"> Familiar Faces:</strong> Enjoy
                rides with drivers you know and trust, with fewer cancellations.
                Your safety and comfort are our priority—no surprises, just
                consistency.
              </li>
              <li>
                <strong className="text-primary">Reward System: </strong>
                Now you can finally get a "thank you" for doing all that hard
                work sitting in the backseat—because being nice really should
                pay off, right?
              </li>
            </ul>
          </div>
        </div>

        {/* Common Benefits */}
        <div className="relative bg-white w-full rounded-lg md:p-8 p-3 mt-12 shadow-md  ">
          <div className="absolute inset-0 rounded-lg overflow-hidden">
            <Image
              src={commonImg}
              alt="common Background"
              fill
              style={{ objectFit: "cover" }}
              className="opacity-15 bg-center"
            />
          </div>
          <h2 className="text-4xl font-bold  mb-6 text-center text-primary">
            Common Benefits
          </h2>
          <ul className="space-y-6 text-[#868686] lg:text-xl text-lg">
            <li>
              
              <strong className="text-primary"> Safety: </strong>
              Because nothing says trust like knowing both riders and drivers
              have passed their background checks— everyone’s getting vetted,
              just to keep things interesting!
            </li>
            <li>
              <strong className="text-primary">
                Customer Service Control: </strong>
              Customer Service Control: Users act as a jury and judge in
              disputes.
            </li>

            <li>
              <strong className="text-primary">  
                User Driven Research & Development: </strong>
              R&D Participation: Contribute ideas to shape the future of the
              platform.
            </li>

            <li>
              <strong className="text-primary">
                  Groundbreaking Incentives: </strong>
              Second Chances: Opportunity for users to redeem themselves and
              rebuild their lives.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WIIFM;
