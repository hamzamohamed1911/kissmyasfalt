import Image from "next/image";
import { Imagemoney1, Imagemoney2, Imagemoney3 } from "../../../public";

const RewardsSystem = () => {
  return (
    <section id="rewards-system" className="w-full h-auto my-20 py-16 ">
      <div className="container mx-auto flex flex-col items-center justify-center py-8 px-4 md:px-0 relative">
        {/* Heading */}
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-[#d71515] mb-12 text-center font-urban leading-tight">
          Rewards System
        </h1>

        {/* Content */}
        <div className="grid grid-cols-12 gap-8 lg:gap-12 w-full text-lg relative">
          {/* Left Content */}
          <div className="col-span-12 lg:col-span-6 relative">
            <div className="space-y-8 text-[#868686]">
              {/* Add an image in the top left corner */}
              <div className="absolute top-1/2 lg:left-1/2 md:left-1/3 left-0 w-full opacity-25 ">
                <Image src={Imagemoney1} alt="Money reward" width={500} height={500} className="object-contain" />
              </div>

              {/* Quest */}
              <div>
                <strong className="text-[#3C3B6E]">Quest:</strong> Complete a set number of trips within a specific time frame.
              </div>
              <div>
                <strong className="text-[#3C3B6E]">Service Level Impact:</strong> Riders with longer trips struggle to find drivers willing to accept their ride during this period.
              </div>

              {/* Surge Based */}
              <div>
                <strong className="text-[#3C3B6E]">Surge Based:</strong> Drive to a specific area to earn a bonus per ride.
              </div>
              <div>
                <strong className="text-[#3C3B6E]">Service Level Impact:</strong> Drivers ignore trips while heading to the surge zone, as the bonus doesn’t apply to those rides. They also become overly selective, prioritizing quick, high-paying trips, leading to inconsistent service quality.
              </div>

              {/* Time Based */}
              <div>
                <strong className="text-[#3C3B6E]">Time Based:</strong> Earn a bonus for rides during a specific hour in a particular location.
              </div>
              <div>
                <strong className="text-[#3C3B6E]">Service Level Impact: </strong> Just before the bonus hour, drivers tend to ignore all trips, whether long or short, waiting for the bonus period to start.
              </div>

              {/* Drivers' Reflection */}
              <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
                <strong className="text-[#d71515]">Drivers, ask yourselves:</strong>
                <ol className="list-disc pl-6 mt-2">
                  <li>Do you really feel the rewards are worth the extra effort?</li>
                  <li>Does the service fee mysteriously decrease on reward-eligible rides, leaving you with almost the same fare as a normal trip?</li>
                  <li>Have you ever headed to a bonus area, only for it to vanish when you’re just a minute away?</li>
                </ol>
                <span className="text-[#3C3B6E] mt-4 block">Sounds like more than just bad luck, doesn’t it?</span>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-12 lg:col-span-6 relative">
            {/* Add an image here for the right-side content */}
            <div className="absolute -top-16 right-0 w-full opacity-25">
              <Image src={Imagemoney2} alt="Money icon" width={400} height={400} className="object-contain" />
            </div>

            <div className="space-y-8 text-[#868686]">
              {/* Non-Stop Competition */}
              <div>
                <strong className="text-[#3C3B6E]">Non-Stop Competition:</strong> You’re always in the game! Rewards are given every 6 hours, every week, and every month.
              </div>
              <div>
                <strong className="text-[#3C3B6E]">Riders Get Rewarded by Drivers:</strong> Your kindness matters! The top drivers reward their best riders, so being polite and having a great attitude actually pays back.
              </div>

              {/* Service Level-Based Competition */}
              <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
                <strong className="text-[#d71515]">Service Level-Based Competition:</strong> focuses on fair performance and isn’t tied to:
                <ol className="list-disc pl-6 mt-2">
                  <li>Location</li>
                  <li>Time of day</li>
                  <li>Number of trips</li>
                </ol>
              </div>

              {/* What Truly Matters */}
              <div>
                <strong className="text-[#3C3B6E]">Instead, it rewards you for what truly matters:</strong>
                <ol className="list-disc pl-6 mt-2">
                  <li>Total mileage driven</li>
                  <li>Your acceptance rate</li>
                  <li>Low cancellation rate</li>
                  <li>Star ratings from riders</li>
                </ol>
                <span className="text-[#3C3B6E] mt-4 block">Drive when and where you want, and get rewarded for consistently delivering quality service.</span>
              </div>

              {/* Actual Rewards */}
              <div className="bg-[#f9f9f9] p-6 rounded-lg shadow-md">
                <span className="text-[#d71515] block"><strong>Rewards That Are Truly Worth It: </strong></span> You’re not just earning points; you’re getting real value!
                <ol className="list-disc pl-6 mt-2">
                  <li><strong>Session:</strong> Of the total service fee <strong className="text-[#d71515]">1%</strong> goes to top drivers.</li>
                  <li><strong>Weekly:</strong> Of the total service <strong className="text-[#d71515]">0.5%</strong> fee is up for grabs.</li>
                  <li><strong>Monthly:</strong> Of the total service fee <strong className="text-[#d71515]">0.25%</strong> rewards the best performers.</li>
                </ol>
                <span className="text-[#3C3B6E] mt-4 block">These are actual rewards that make your effort pay off.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Add an image at the bottom center */}
        <div className="mt-16 w-full  absolute -bottom-16 right-0 opacity-25">
          <Image src={Imagemoney3} alt="Rewards illustration" width={400} height={400} className="object-contain" />
        </div>
      </div>
    </section>
  );
};

export default RewardsSystem;
