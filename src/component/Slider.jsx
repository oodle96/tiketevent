import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../styles/Slider.css";

import BannerSlider from '../assets/exbanner-slider.png'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        loopedSlides={1}
        centeredSlides={true}
        autoplay={{
            delay: 4500,
        }}

        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
                <img className='img-fluid' src={BannerSlider} alt='bannerslider'></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
                <img className='img-fluid' src={BannerSlider} alt='bannerslider'></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="d-flex align-items-center justify-content-center">
                <img className='img-fluid' src={BannerSlider} alt='bannerslider'></img>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
