// import GetBtn from "@/components/buttons/GetBtn";
import Features from "@/components/main/Features";
import Footer from "@/components/main/Footer";
import HeroSection from "@/components/main/HeroSection";
import MenuPreview from "@/components/main/MenuPreview";
import OrderNow from "@/components/main/OrderNow";
// import PreparedSection from "@/components/main/PreparedSection";
import ProcessSection from "@/components/main/ProcessSection";
// import Slider from "@/components/main/Slider";
import Testimonials from "@/components/main/Testimonials";
import WhyChooseUs from "@/components/main/WhyChooseUs";
import WhyFitMafia from "@/components/main/WhyFitMafia";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full min-h-screen bg-white text-black  ">
      <HeroSection />
      <ProcessSection />
      <WhyFitMafia />
      <OrderNow/>
      <MenuPreview />
      {/* <Slider/> */}
      {/* <PreparedSection/> */}
      <Testimonials />
      <Features />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}
