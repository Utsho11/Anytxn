"use client";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Section4 = () => {
  return (
    <div className="relative h-[60vh] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#00A9E0] to-blue-600 z-0"
        style={{
          clipPath: "polygon(0 0, 100% 20%, 100% 100%, 0 100%)",
        }}
      ></div>
      <div className="container mx-auto px-6 lg:px-32 flex flex-col items-center relative z-10">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-semibold text-white font-montserrat leading-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Legacy no longer
        </motion.h1>

        <motion.p
          className="text-white font-montserrat text-base md:text-lg mt-4"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Talk to us to find out how we can transform your organisation for the
          future.
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <button className="flex items-center text-white bg-[#FE8B53] py-4 px-8 rounded-lg shadow-md group transition-all duration-300 ease-in-out">
            <span>Contact Us</span>
            <ChevronRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Section4;
