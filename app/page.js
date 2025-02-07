"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { banner, homeMeassageSection, homeTestimonial, PriceRatedata, welcomDaySpa } from "../lib/json/pagesData/homePage/index";
import GreenDaySpaSection from "./components/greenDaySpaSection";
import MeassageSection from "./components/meassageSection";
import PriceRateSection from "./components/priceRateSection";
import TestimonialSection from "./components/testimonialSection";
import Footer from "./components/commons/footer";
import HomeHeroSection from"../app/components/homeheroSection/index"

export default function Home() {
  return (
    <div className="relative">
      {/* Swiper Sections with smooth fade transition */}
      <Swiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        effect="fade"
        autoplay={false}
        loop={true}
        mousewheel={true}
        modules={[EffectFade, Mousewheel,Autoplay]}
        className=""
        speed={500}
      >
        <SwiperSlide>
       
            {/* <Banner bannerData={banner} /> */}
            <HomeHeroSection bannerData={banner} />
     
        </SwiperSlide>

        <SwiperSlide>
     <GreenDaySpaSection GreenDaySpaData={welcomDaySpa} />

        </SwiperSlide>

        <SwiperSlide>
     
            <MeassageSection meassageSectionData={homeMeassageSection} />
   
        </SwiperSlide>

        <SwiperSlide>
     
            <TestimonialSection TestimonialData={homeTestimonial} />
       
        </SwiperSlide>

        <SwiperSlide>
   
            <PriceRateSection PriceRateSectiondata={PriceRatedata} />
   
        </SwiperSlide>

        <SwiperSlide>
  
   
            <Footer />
     
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
