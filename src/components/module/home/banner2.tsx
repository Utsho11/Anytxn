import Image from "next/image";

const Banner2 = () => {
  return (
    <div className="">
      <div className="container mx-auto lg:px-32">
        <div className="flex flex-col lg:flex-row justify-between items-center p-4 lg:p-16 gap-8">
          {/* Left Side - Title & Heading */}
          <div className="lg:w-1/2 space-y-5 lg:text-left">
            <h2 className="text-blue-500 font-bold uppercase tracking-widest text-sm lg:text-base">
              POWERING THE FUTURE OF FINANCE
            </h2>
            <h1 className="text-xl lg:text-3xl font-semibold text-[#0B305B] leading-snug">
              Uncovering new ways to delight customers
            </h1>

            {/* Mobile Image */}
            <div className="md:hidden relative w-[350px] h-[200px]">
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
                alt="image"
                width={350}
                height={200}
                className="rounded-lg object-cover w-full h-full"
              />

              {/* Floating Icons */}
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
                alt="icon1"
                className="absolute top-0 left-0 w-[50px] h-[50px] lg:w-[74px] lg:h-[75px] transform -translate-y-1/3 animate-spin-slow"
                width={50}
                height={50}
              />
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
                alt="icon2"
                className="absolute top-10 right-5 w-[60px] h-[60px] lg:w-[89px] lg:h-[88px] animate-pulse"
                width={60}
                height={60}
              />
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
                alt="icon3"
                className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[70px] h-[70px] lg:w-[116px] lg:h-[115px] animate-spin-slow"
                width={70}
                height={70}
              />
            </div>

            <p className="font-semibold text-[#164377]">
              AnyTech is revolutionising financial technology by introducing
              innovative and real-time transaction account processing
              capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-[#164377]">
              Our modern approach surpasses traditional banking and card
              processing systems, empowering you with the most advanced
              technology for lasting success.
            </p>
          </div>

          {/* Right Side - Desktop Image */}
          <div className="hidden md:block relative w-[495px] h-[425px]">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/5ca8af1a922b106b962c34781483bc8e6e066688-1124x1364.png?w=960&auto=format"
              alt="image"
              width={495}
              height={425}
              className="rounded-lg object-cover w-full h-full"
            />

            {/* Floating Icons */}
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/c544c6e75349fb440fc0938052f9288519c87bec-74x75.svg?w=74&auto=format"
              alt="icon1"
              className="absolute top-4 -left-4 w-[74px] h-[75px] transform -translate-y-1/3 animate-spin-slow"
              width={50}
              height={50}
            />
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/f034c835798f95c1ce84f9c34ba48682b6383d06-89x88.svg?w=89&auto=format"
              alt="icon2"
              className="absolute top-10 right-5 w-[89px] h-[88px] animate-pulse"
              width={50}
              height={50}
            />
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/0f6c8e3f8d16b88978823d82126b03593266eb79-116x115.svg?w=116&auto=format"
              alt="icon3"
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-[116px] h-[115px] animate-spin-slow"
              width={50}
              height={50}
            />
            <Image
              src="https://anytxn.com/backgrounds/home/futureOfFinance/foreground.png"
              alt="bg"
              fill
              className="absolute top-10  w-[116px] h-[115px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
