import Image from "next/image";
import { Imagemoney1, Imagemoney2, Imagemoney3, Logo, sadPerson, VsIcon } from "../../../public";

const RewardsSystem = () => {
  return (
    <section id="rewards-systems" className="w-full h-auto my-20 py-16 p-4">
      <div className="container mx-auto flex flex-col items-center justify-center py-8 px-4 md:px-0 relative">
        {/* Heading */}
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-[#d71515] mb-12 text-center font-urban leading-tight">
          Rewards System
        </h1>
        

        <div className="grid grid-cols-12 gap-6 w-full my-8 text-lg relative">
          {/* left Content */}
          <div className="col-span-12 lg:col-span-5 relative bg-[#f9f9f9] p-4 rounded-lg shadow-md ">
          <h1 className="font-bold text-4xl flex justify-center font-urban" 
    style={{
        color: '#7CFC00', 
        textShadow: '4px 4px 0px #800080' 
    }}>
    Competition
</h1>
            <div className="space-y-8 text-[#868686]">
              <div className="absolute top-1/2 lg:left-1/2 md:left-1/3 left-0 w-full opacity-25 ">
                <Image
                  src={Imagemoney1}
                  alt="Money reward"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </div>

              <div>
                <strong className="text-[#d71515] font-urban">Quest</strong> Complete a
                set number of trips within a specific time frame.
              </div>
              <div>
                <strong className="text-primary">
                  Service Level Impact </strong>
                Riders with longer trips struggle to find drivers willing to
                accept their ride during this period.
              </div>

              <div>
                <strong className="text-[#d71515] font-urban">Surge Based</strong> Drive
                to a specific area to earn a bonus per ride.
              </div>
              <div>
                <strong className="text-primary">
                  Service Level Impact
                </strong> Drivers ignore trips while heading to the surge zone, as the
                bonus doesn’t apply to those rides. They also become overly
                selective, prioritizing quick, high-paying trips, leading to
                inconsistent service quality.
              </div>

              <div>
                <strong className="text-[#d71515] font-urban">Time Based</strong> Earn a
                bonus for rides during a specific hour in a particular location.
              </div>
              <div>
                <strong className="text-primary">
                  Service Level Impact </strong>
                Just before the bonus hour, drivers tend to ignore all trips,
                whether long or short, waiting for the bonus period to start.
              </div>

              <div className="">
                <strong className="text-[#d71515] font-urban">
                  Drivers, ask yourselves
                </strong>
                <ol className="list-disc pl-6 mt-2 space-y-3">
                  <li>
                    Do you really feel the rewards are worth the extra effort?
                  </li>
                  <li>
                    Does the service fee mysteriously decrease on
                    reward-eligible rides, leaving you with almost the same fare
                    as a normal trip?
                  </li>
                  <li>
                    Have you ever headed to a bonus area, only for it to vanish
                    when you’re just a minute away?
                  </li>
                </ol>
                <span className="text-[#d71515] mt-4 block">
                  Sounds like more than just bad luck, doesn’t it?
                </span>
              </div>
              <div className="absolute top-0 -right-0 w-full opacity-25">
                <Image
                  src={sadPerson}
                  alt="Money icon"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-2 flex justify-center items-center">
            <Image alt="Vs" width={200} src={VsIcon}/>
          </div>

          {/* Right Content */}
          <div className="col-span-12 lg:col-span-5 relative bg-[#f9f9f9] p-4 rounded-lg shadow-md">
            {/* Add an image here for the right-side content */}
            <div
            className="flex items-center justify-center py-5"
            href="/"
          >
            <Image
              alt="kiss my asfalt"
              className="w-auto h-24 absolute z-20 "
              priority
              src={Logo}
            />
          </div>

            <div className="space-y-8 text-[#868686]">
              <div className="absolute -top-0 right-0 w-full opacity-25">
                <Image
                  src={Imagemoney2}
                  alt="Money icon"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
              {/* Non-Stop Competition */}
              <div>
                <strong className="text-[#d71515] font-urban">
                  Non-Stop Competition </strong>
                You’re always in the game! Rewards are given every 6 hours,
                every week, and every month.
              </div>
              <div>
                <strong className="text-primary">
                  Riders Get Rewarded by Drivers </strong>
                Your kindness matters! The top drivers reward their best riders,
                so being polite and having a great attitude actually pays back.
              </div>

              {/* Service Level-Based Competition */}
              <div className="">
                <strong className="text-[#d71515] font-urban">
                  Service Level-Based Competition </strong>
                Focuses on fair performance and isn’t tied to
                <ol className="list-disc pl-6 mt-2">
                  <li>Location</li>
                  <li>Time of day</li>
                  <li>Number of trips</li>
                </ol>
              </div>

              {/* What Truly Matters */}
              <div>
                <strong className="text-primary  ">
                  Instead, it rewards you for what truly matters
                </strong>
                <ol className="list-disc pl-6 mt-2">
                  <li>Total mileage driven</li>
                  <li>Your acceptance rate</li>
                  <li>Low cancellation rate</li>
                  <li>Star ratings from riders</li>
                </ol>
                <span className="text-[#d71515] mt-4 block">
                  Drive when and where you want, and get rewarded for
                  consistently delivering quality service.
                </span>
              </div>

              {/* Actual Rewards */}
              <div className="">
                <span className="text-[#d71515] block font-urban">
                  <strong>Rewards That Are Truly Worth It </strong>
                </span>
                You’re not just earning points; you’re getting real value!
                <ol className="list-disc space-y-3 pl-6 mt-2">
                  <li>
                    <strong>Session</strong> <strong className="text-[#d71515]"> 1% </strong>  Of the total service fee
                    goes to top
                    drivers.
                  </li>
                  <li>
                    <strong>Weekly</strong> <strong className="text-[#d71515]"> 0.5% </strong> Of the total service
                     fee is up
                    for grabs.
                  </li>
                  <li>
                    <strong>Monthly</strong> <strong className="text-[#d71515]"> 0.25% </strong> Of the total service fee
                     rewards
                    the best performers.
                  </li>
                </ol>
                <span className="text-[#d71515] mt-4 block">
                  These are actual rewards that make your effort pay off.
                </span>
              </div>
       
            </div>
            <div className=" w-full  absolute -bottom-0 right-0 opacity-25">
          <Image
            src={Imagemoney3}
            alt="Rewards illustration"
            width={500}
            height={400}
            className="object-contain"
          />
        </div>
          </div>
          
        </div>

        
      </div>
    </section>
  );
};

export default RewardsSystem;
