"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 
import Link from "next/link"; 
import { footerIcon } from "../../../public";

const SuccessAnimation = () => {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      }}
      className="relative z-10 bg-white p-10 rounded-3xl shadow-2xl border-8 border-black text-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-[#d71515] text-5xl lg:text-7xl font-extrabold comic-font mb-4"
      >
        Thank You!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1 }}
        className="text-2xl lg:text-3xl text-[#868686] comic-font"
      >
        We appreciate your support!
      </motion.p>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          delay: 1.5,
          type: "spring",
          stiffness: 400,
          damping: 10,
        }}
        className="mt-8 flex justify-center"
      >
        <Image
          src={footerIcon}
          className="text-[#d71515] text-6xl lg:text-8xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.8 }}
        className="mt-10"
      >
<Link href="/" passHref>
  <div className="text-[#d71515] font-urban py-3 rounded-md text-3xl font-semibold comic-font transition duration-300 ease-in-out transform hover:rotate-3 hover:scale-110">
    Back to Home
  </div>
</Link>



      </motion.div>
    </motion.div>
  );
};

export default SuccessAnimation;
