import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <div className="w-full xl:h-screen p-6 xl:p-12 text-white bg-[#1f1f1f]" id="Testimonials">

        <div className="w-full flex flex-col items-center justify-center">
          <h4 className="text-lg xl:text-2xl font-semibold text-center text-[#85f854]">Our Testimonials</h4>
          <h2 className="p-5 text-2xl leading-7 xl:text-5xl font-bold xl:font-black text-center font-[ME]">Our satisfied customers feedback</h2>
          <p className="w-full xl:w-[60%] xl:text-lg font-light text-center">Read through our testimonials to see our services quality and also how we help them to achieve thier goals. How our clients loving it?</p>
        </div>

        <div className="w-full p-20 px-0 flex xl:hidden">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={0}
            slidesPerView={1}
            spaceBetween={50}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="w-full h-[40vh] p-4 xl:p-5 xl:px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-14 h-14 md:w-20 md:h-20">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-lg md:text-2xl lg:text-md leading-none">Suraj Yaduvanshi</h2>
                      <span className="text-sm md:text-lg font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-2xl md:text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full md:text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-4 xl:p-5 xl:px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-14 h-14 xl:w-16 xl:h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-lg xl:text-xl xl:font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="text-sm xl:text-base font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-2xl xl:text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full xl:text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-4 xl:p-5 xl:px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-14 h-14 xl:w-16 xl:h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-lg xl:text-xl xl:font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="text-sm xl:text-base font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-2xl xl:text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full xl:text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-4 xl:p-5 xl:px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-14 h-14 xl:w-16 xl:h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-lg xl:text-xl xl:font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="text-sm xl:text-base font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-2xl xl:text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full xl:text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-4 xl:p-5 xl:px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-14 h-14 xl:w-16 xl:h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-lg xl:text-xl xl:font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="text-sm xl:text-base font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-2xl xl:text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full xl:text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>

        <div className="w-full h-[80%] hidden xl:flex items-center justify-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            initialSlide={2}
            slidesPerView={2}
            spaceBetween={100}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            modules={[EffectCoverflow]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div className="w-full h-[40vh] p-5 px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-16 h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-5 px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-16 h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-5 px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-16 h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-5 px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-16 h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="w-full h-[40vh] p-5 px-8 flex flex-col justify-between overflow-hidden rounded-2xl bg-[#2e2e2e]">
                <div className="flex items-center justify-between">
                  <div className="flex gap-4 items-center justify-center">
                    <div className="w-16 h-16">
                      <img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className="">
                      <h2 className="text-xl font-medium leading-none">Suraj Yaduvanshi</h2>
                      <span className="font-light leading-none">CEO of Arts Studio</span>
                    </div>
                  </div>
                  <div className="">
                    <span className="text-4xl text-[#4d4d4d]">
                      <FaQuoteLeft />
                    </span>
                  </div>
                </div>
                <p className="w-full h-full text-lg flex items-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique voluptas, neque ad explicabo quisquam pariatur tempore sequi nemo impedit fuga sed velit enim. Dolore sed, excepturi voluptate iure atque, culpa deleniti sint id minus sunt saepe sequi molestiae qui illo!</p>
              </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials