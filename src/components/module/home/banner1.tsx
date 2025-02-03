"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const Banner1 = () => {
  return (
    <div className="relative h-[100vh]">
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#00A9E0] to-blue-600
 z-0"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 100%)",
        }}
      ></div>

      <div className="container mx-auto px-6 lg:px-32 flex flex-col-reverse md:flex-row items-center gap-8 relative z-10">
        <div className="text-center md:text-left space-y-5 flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-semibold text-white font-montserrat leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Embrace the future of finance
          </motion.h1>

          {/* Animated Sub-Heading */}
          <motion.p
            className="text-white font-montserrat text-base md:text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Reimagine financial services with AnyTech’s open platform,
            distributed banking solution that powers transformation.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <button className="py-4 px-8 rounded-lg shadow-lg flex text-white items-center group bg-[#fe8b53]">
              <span>Reach Out to Us</span>
              <ChevronRight className="ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2" />
            </button>
          </motion.div>
        </div>

        <div className="flex-1 flex justify-center md:justify-end py-8">
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/4c4adc11b7ca6ea25c7e7cba555d8f0b06488f3f-7952x5304.jpg?w=1920&auto=format"
              height={350}
              width={350}
              alt="bg"
              className="rounded-lg shadow-xl md:h-[500px] md:w-[500px] lg:h-[600px] lg:w-[600px] hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner1;
