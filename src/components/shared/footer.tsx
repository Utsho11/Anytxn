import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#002045] text-[#00E9EA]">
        <div className="container mx-auto px-32 flex items-center justify-between py-11">
          <div className="flex gap-3">
            <Image
              src="https://cdn.sanity.io/images/6jywt20u/production/ed83f5f1e94efb47572d503f53456dcff902b81c-200x32.svg?w=200&fm=webp"
              width={200}
              height={32}
              alt=""
            />
            <div className="flex gap-3 lg:hidden md:hidden">
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/13baec705b693635850a77c8d13a26ba9e2318c4-14x15.svg?w=320&fm=webp"
                alt="link"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/4c3113a756fa8bc9ce8c8878e1361d5287f99c6a-17x18.svg?w=320&fm=webp"
                alt="call"
                width={20}
                height={20}
              />
              <Image
                src="https://cdn.sanity.io/images/6jywt20u/production/2cc1280badc532d4adb15fbfed7307e1c5c7696a-16x12.svg?w=320&fm=webp"
                alt="fac"
                width={20}
                height={20}
              />
            </div>
          </div>
          <div className="hidden items-center text-[#00E9EA] lg:flex">
            <p className="border-r border-blue-800 px-6 py-4 text-res-body-p1-semibold lg:text-body-p1-semibold">
              Our Solutions
            </p>
            <ul className="flex items-center">
              <li>
                <Link
                  href="/en/solutions/anycaas"
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-[#1F80F0] lg:text-body-p1"
                >
                  AnyCaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/en/solutions/anybaas"
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-[#1F80F0] lg:text-body-p1"
                >
                  AnyBaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/en/solutions/anypaas"
                  className="px-6 py-4 text-res-body-p1 transition-colors duration-300 last:pr-0 hover:text-[#1F80F0] lg:text-body-p1"
                >
                  AnyPaaS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-b border-blue-800"></div>
      <div className="bg-[#00152D] py-6 text-[#1F80F0]">
        <div className="container mx-auto px-32 flex flex-col items-center justify-between text-blue-main lg:flex-row text-sm">
          <p className="text-center lg:text-left">
            <strong>&copy; 2023 All rights reserved</strong>. Any Technology Pte
            Ltd.
          </p>
          <div className="flex items-center gap-4 mt-4 lg:mt-0">
            <Link
              href="#"
              className="transition-colors duration-300 hover:text-blue-highlight"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
