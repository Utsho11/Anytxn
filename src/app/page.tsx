import Banner1 from "../components/module/home/banner1";
import Banner2 from "../components/module/home/banner2";
import Section1 from "../components/module/home/section1";
import Section2 from "../components/module/home/section2";
import Section3 from "../components/module/home/section3";
import Section4 from "../components/module/home/section4";
import Footer from "../components/shared/footer";
import Header from "../components/shared/header";
import CustomWave from "../components/svg/CustomWave";

export default function Home() {
  return (
    <div className="">
      <Header />
      <Banner1 />
      <Banner2 />
      <div className="">
        <CustomWave />
      </div>
      <div className="mx-4">
        <Section1 />
      </div>
      <div className="">
        <CustomWave />
      </div>
      <div className="mx-4">
        <Section2 />
      </div>
      <Section3 />
      <Section4 />
      <Footer />
    </div>
  );
}
