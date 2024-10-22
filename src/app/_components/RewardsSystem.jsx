import Image from "next/image";
import { RewardsSystemImg } from "../../../public";

const RewardsSystem = () => {
  return (
    <section id="rewards-system" className="w-auto h-auto my-20 py-12 bg-[#d71515]">
      <div className="flex items-center flex-col justify-center container w-full h-auto py-8">
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-bold text-white mb-8 text-center font-urban leading-10">
          Rewards System
        </h1>
        <div className="my-10">
        <a data-fancybox="gallery" href="/Competition.png">
        <Image
          src={RewardsSystemImg}
          alt="Zoomable"
          width={450}
          height={380}
          className="cursor-zoom-in w-full transform transition-transform duration-500 ease-in-out hover:scale-105"
        />
      </a>
    </div>
      </div>
    </section>
  );
};

export default RewardsSystem;
