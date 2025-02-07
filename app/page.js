"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { banner, homeMeassageSection, homeTestimonial, PriceRatedata, welcomDaySpa } from "../lib/json/pagesData/homePage/index";
import Banner from "./(main)/components/commons/banner";
import GreenDaySpaSection from "./(main)/components/greenDaySpaSection";
import MeassageSection from "./(main)/components/meassageSection";
import PriceRateSection from "./(main)/components/priceRateSection";
import TestimonialSection from "./(main)/components/testimonialSection";
import Footer from "./(main)/components/commons/footer";

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
        modules={[EffectFade, Mousewheel, Autoplay]}
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
