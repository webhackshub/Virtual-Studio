import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../Slider/Portfolio.css'
import Vdchawla from '../assets/Portfolio/VD-Chawla.png';
import Unboxtech from '../assets/Portfolio/Unbox-Tech.png';
import Vemonstech from '../assets/Portfolio/Venoms-Tech.png';
import Freshtechupdates from '../assets/Portfolio/Fresh-Tech-Updates.png';

const Portfolio = () => {

  return (
    <>
      <div className="w-full xl:h-screen p-6 xl:p-16 xl:px-12 pb-0 text-[#1f1f1f] bg-white" id="Portfolio">
        <div className="w-full md:w-[60%] xl:h-[20%]">
          <h2 className="flex items-center flex-wrap text-3xl xl:text-5xl font-bold">
            <span className="font-[ME]">Our</span>
            <span className="m-2 md:m-4 md:pt-0 before:block before:rounded-md before:absolute before:-inset-1 before:-skew-x-12 before:bg-[#85f854] relative">
              <span className="p-2 xl:p-5 relative font-[ME] text-[#1f1f1f]">Best Work</span>
            </span>
            <span className="font-[ME]">of Successful Projects</span>
          </h2>
        </div>
        <div className="w-full p-20 px-0 block xl:hidden">
          <Swiper
          initialSlide={1}
            slidesPerView={1}
            spaceBetween={20} 
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
            >

            <SwiperSlide>
              <div className="w-full h-[25%]">
                <a href="https://www.youtube.com/@UnboxTech14">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Unboxtech} alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[25%]">
                <a href="https://www.youtube.com/@VenomsTech">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Vemonstech} alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[25%]">
                <a href="https://www.youtube.com/@freshtechupdate">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Freshtechupdates} alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[25%]">
                <a href="https://www.youtube.com/@vdchawlacyclestore">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Vdchawla} alt="" />
                </a>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
        <div className="w-full h-[80%] hidden xl:flex items-center">
          <Swiper
            slidesPerView={2}
            spaceBetween={40} 
            navigation={true} 
            modules={[Navigation]}
            className="mySwiper"
            >

            <SwiperSlide>
              <div className="w-full h-[50%]">
                <a href="https://www.youtube.com/@UnboxTech14">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Unboxtech} alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[50%]">
                <a href="https://www.youtube.com/@VenomsTech">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Vemonstech} alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[50%]">
                <a href="https://www.youtube.com/@freshtechupdate">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Freshtechupdates} alt="" />
                </a>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-full h-[50%]">
                <a href="https://www.youtube.com/@vdchawlacyclestore">
                  <img className="w-full h-full object-cover rounded-2xl outline-none" src={Vdchawla} alt="" />
                </a>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Portfolio