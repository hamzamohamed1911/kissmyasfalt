"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000); 

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="loader w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin text-4xl">
        loadinnnnnnnnng
      </div>
    </motion.div>
  );
};

export default Loader;
