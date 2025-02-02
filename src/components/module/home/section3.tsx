"use client";
import Image from "next/image";
import CountUp from "react-countup";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const stats = [
  { number: 20, symbol: ">", label: "Years of Experience" },
  { number: 40, symbol: "+", label: "Financial Institutions" },
  { number: 200, symbol: ">", label: "Customers Each", unit: "m" },
];

const logos = [
  {
    id: 1,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/67ef6d224529c5521d5d38b4ac18521f589865d9-603x414.png?w=320&fm=webp",
  },
  {
    id: 2,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/9c57a834d791df3ba5062693e0cf60cc879f46da-2560x768.png?w=320&fm=webp",
  },
  {
    id: 3,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/8f6dbd7e59875cb02e47e9887935c668191af0f1-778x258.png?w=320&fm=webp",
  },
  {
    id: 4,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/c86c67596c1893c78c783bcc323531a7ea723c20-1000x182.png?w=320&fm=webp",
  },
  {
    id: 5,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/3ce67f3ece1c1b696d9d6e75f665c31ac155b679-960x540.png?w=320&fm=webp",
  },
  {
    id: 6,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/b01bae36b9db80dc1f9af2bf3e931bc08267827b-855x292.png?w=320&fm=webp",
  },
  {
    id: 7,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/f21131d4c2a144139ed50dbacc56af65bad6541f-1599x628.png?w=320&fm=webp",
  },
  {
    id: 8,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/d2877eb14e7b59f820bcb49d69363c49e134ee81-1626x250.png?w=320&fm=webp",
  },
  {
    id: 9,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/2829e9f6c94501d700b332fab14832b6eb64e6b5-5000x1970.png?w=320&fm=webp",
  },
  {
    id: 10,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/9764422d5b731f38edd216852c7c77e650647975-500x330.png?w=320&fm=webp",
  },
  {
    id: 11,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/d96d229024fe964c6cc68d62beb75b126b08d3b5-318x61.svg?w=318&fm=webp",
  },
  {
    id: 12,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/ab9f4a4a11a33031761167b640dda78d89009f1e-724x137.png?w=320&fm=webp",
  },
  {
    id: 13,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/8d2528e19c38722cc52dda4d8b6976775c18db29-800x527.png?w=320&fm=webp",
  },
  {
    id: 14,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/ba16ca6efbbe78a1e56ff61bd8befc0f0f93e18a-1200x337.png?w=320&fm=webp",
  },
  {
    id: 15,
    logo: "https://cdn.sanity.io/images/6jywt20u/production/5f4683ef95594b29414088c82c00dddb4c61338b-862x289.png?w=320&fm=webp",
  },
];

const Section3 = () => {
  return (
    <div className="container mx-auto ">
      <h6
        style={{
          letterSpacing: "1.5px",
        }}
        className="pb-8 text-center text-lg uppercase text-[#1F80F0] font-montserrat lg:pb-6 lg:text-[16px] font-semibold space-x-5"
      >
        TRUSTED BY THE BEST
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-3 px-10 md:px-16 lg:px-28 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex flex-col items-center w-full border-dashed border-blue-500 py-4 sm:py-6 md:py-8">
              {/* Stat Number */}
              <h2 className="text-[64px] lg:text-[80px] xl:text-[96px] font-montserrat font-semibold bg-gradient-to-b from-blue-400 to-[#0057BB] bg-clip-text text-transparent">
                {stat.symbol}
                <span>
                  <CountUp end={stat.number} duration={5} />
                </span>
                {stat.unit || ""}
              </h2>

              {/* Stat Label */}
              <p className="font-montserrat text-[#151D2F] font-medium text-sm sm:text-md md:text-lg mt-2">
                {stat.label}
              </p>
            </div>
            {/* Border Line for Small Screens */}
            <div className="border border-blue-200 w-full sm:hidden"></div>
          </div>
        ))}
      </div>

      <div className="my-16 hidden md:block">
        <div className="grid grid-cols-5 gap-8 place-items-center">
          {logos.map((itm, idx) => (
            <div
              key={idx}
              className="relative w-[150px] h-[100px] flex items-center justify-center"
            >
              <Image
                src={itm.logo}
                alt={`img-${idx + 1}`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="my-16 sm:hidden">
        <Swiper slidesPerView={3} spaceBetween={30} className="mySwiper">
          {logos.map((itm, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-[150px] h-[100px] flex items-center justify-center mx-8">
                <Image
                  src={itm.logo}
                  alt={`img-${idx + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section3;
