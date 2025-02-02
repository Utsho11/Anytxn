"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useState } from "react";
import slides from "../data/slideData";
import Image from "next/image";

export default function Section2() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [swiper, setSwiper] = useState<any>(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    if (swiper) {
      swiper.slideToLoop(index); // ✅ Corrected for looping
      setActiveTab(index);
    }
  };

  return (
    <div className="mb-8">
      <div className="my-8">
        <h6
          style={{
            letterSpacing: "1.5px",
          }}
          className="text-center text-lg uppercase text-[#1F80F0] font-montserrat lg:pb-6 lg:text-[16px] font-semibold space-x-5"
        >
          TECHNOLOGY BUILT FOR YOU
        </h6>
        <h1 className="text-[#0B305B] text-3xl lg:text-5xl font-montserrat font-semibold text-center">
          The future of finance
        </h1>
      </div>
      <div className="container w-full max-w-xl lg:max-w-5xl lg:mx-auto">
        {/* Tab Navigation */}
        <div className="hidden md:block">
          <div className="flex justify-center gap-6 mb-4">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleTabClick(index)}
                className={`px-4 py-2 font-montserrat text-lg text-blue-500 border-b-2 transition-all rounded-full ${
                  activeTab === index
                    ? "border-blue-500 text-blue-500 bg-blue-200"
                    : "border-transparent hover:bg-[#F5FAFF]"
                }`}
              >
                <strong>{slide.title}</strong>
              </button>
            ))}
          </div>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          onSlideChange={(swiper) => setActiveTab(swiper.realIndex)}
          onSwiper={setSwiper}
          className="w-full border rounded-3xl shadow-lg"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="font-montserrat">
              <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-16 gap-8">
                {/* Left Side - Title & Heading */}
                <div className="lg:w-1/2 space-y-5 lg:text-left">
                  <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm lg:text-base">
                    {slide.title}
                  </h2>
                  <h1 className="text-xl lg:text-3xl font-semibold text-[#0B305B] leading-snug">
                    {slide.heading}
                  </h1>
                  <div className="md:hidden">
                    <div className="w-[300px] h-[150px] relative flex items-center justify-center">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={300}
                        height={150}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="font-semibold text-[#164377]">{slide.para1}</p>
                  <p className="text-[#164377]">{slide.para2}</p>
                </div>

                {/* Right Side - Fixed Image Size */}
                <div className="hidden md:block">
                  <div className="w-[495px] h-[425px] relative flex items-center justify-center">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={495}
                      height={425}
                      className="rounded-lg object-cover w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
