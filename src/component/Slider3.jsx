import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ExBanner from '../assets/exbanner.png'
import '../styles/Slider3.css'

// import required modules
import { Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        
        autoplay={{
            delay: 3000,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper mw-tiket"
      >
        <SwiperSlide>
            <div className='border cont-rounded p-0 max-card m-2'>
                <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                <div className='container d-flex flex-column px-3'>
                    <text className='text-gray mt-2'>9 September 2022</text>
                    <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                    <text className='mb-2'>Rp 40.000</text>
                    <button className='btn btn-primary mb-3'>Beli Tiket</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='border cont-rounded p-0 max-card m-2'>
                <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                <div className='container d-flex flex-column px-3'>
                    <text className='text-gray mt-2'>9 September 2022</text>
                    <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                    <text className='mb-2'>Rp 40.000</text>
                    <button className='btn btn-primary mb-3'>Beli Tiket</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='border cont-rounded p-0 max-card m-2'>
                <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                <div className='container d-flex flex-column px-3'>
                    <text className='text-gray mt-2'>9 September 2022</text>
                    <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                    <text className='mb-2'>Rp 40.000</text>
                    <button className='btn btn-primary mb-3'>Beli Tiket</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='border cont-rounded p-0 max-card m-2'>
                <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                <div className='container d-flex flex-column px-3'>
                    <text className='text-gray mt-2'>9 September 2022</text>
                    <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                    <text className='mb-2'>Rp 40.000</text>
                    <button className='btn btn-primary mb-3'>Beli Tiket</button>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='border cont-rounded p-0 max-card m-2'>
                <img src={ExBanner} className='img-fluid' alt='exbanner'/> 
                <div className='container d-flex flex-column px-3'>
                    <text className='text-gray mt-2'>9 September 2022</text>
                    <h6 className='d-flex my-1 w-100'>UMKM Festival Indonesia Vol 3</h6>
                    <text className='mb-2'>Rp 40.000</text>
                    <button className='btn btn-primary mb-3'>Beli Tiket</button>
                </div>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}