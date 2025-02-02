"use client";
import Image from "next/image";
import services from "../data/serviceData";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const Section1 = () => {
  return (
    <div className="container mx-auto lg:px-36">
      <div className="my-8">
        <h6
          style={{
            letterSpacing: "1.5px",
          }}
          className="text-center text-lg uppercase text-[#1F80F0] font-montserrat lg:pb-6 lg:text-[16px] font-semibold space-x-5"
        >
          OUR PHILOSOPHY
        </h6>
        <h1 className="text-[#0B305B] text-3xl lg:text-5xl font-montserrat font-semibold text-center">
          Human-centred innovation
        </h1>
      </div>
      <div className="w-full h-auto hidden md:block">
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/2d90adc3456764f98e38ce40b5ea7d7f52fd4ce1-2206x727.png?w=1920&auto=format"
          alt="image1"
          width={1000}
          height={727}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="w-full h-auto sm:hidden">
        <Image
          src="https://cdn.sanity.io/images/6jywt20u/production/50bc481601f8adb912da12788f7d0143eb5b5eb3-1710x1965.png?w=960&auto=format"
          alt="image1"
          width={1000}
          height={727}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <div className="my-8 hidden md:block">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // Animation triggers when 20% is visible
        >
          {services.map((item, index) => (
            <motion.div
              key={item.id}
              className="border rounded-3xl p-8 space-y-3 bg-[#F8FCFF]"
              variants={fadeUpVariants}
              custom={index} // Adds delay for a staggered effect
            >
              <Image src={item.image} width={50} height={50} alt={item.title} />
              <h1 className="text-[#0B305B] text-xl font-semibold font-montserrat">
                {item.title}
              </h1>
              <p className="text-[#164377] font-montserrat">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="my-8 md:hidden lg:hidden">
        <Swiper slidesPerView={1} loop={true}>
          {services.map((item) => (
            <SwiperSlide
              key={item.id}
              className="border rounded-3xl p-8 space-y-3 bg-[#F8FCFF]"
            >
              <Image src={item.image} width={50} height={50} alt={item.title} />
              <h1 className="text-[#0B305B] text-xl font-semibold font-montserrat">
                {item.title}
              </h1>
              <p className="text-[#164377] font-montserrat">{item.desc}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Section1;
