import React, { useState } from 'react'
import Grid_Line from '../assets/Grid_Line.svg'
import { IoMdCall } from 'react-icons/io'
import { HashLink as NavLink } from 'react-router-hash-link'

const Home = () => {

  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="-.5" className="w-full h-screen bg-[#1f1f1f] z-[-100]">
        <div className="w-full h-full absolute z-[-10]">
          <img className="w-full h-full object-cover" src={Grid_Line} alt="" />
        </div>
        <div className="w-full h-[12vh] xl:h-[15vh] px-6 xl:px-20 relative flex items-center justify-between z-10">
          <div className={`absolute ${menuActive ? "top-0 left-0 opacity-50 translate-y-0" : "-bottom-[-100%] left-0 opacity-0 -translate-y-full"} w-full h-screen bg-black -z-10 transform transition-transform duration-500 ease-in-out`}></div>
          <div className={`absolute w-full h-[40vh] pt-[12vh] rounded-bl-xl rounded-br-xl p-6 top-0 left-0 bg-[#1f1f1f] -z-10 transform transition-transform duration-500 ease-in-out ${menuActive ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="w-full h-full flex items-end justify-center flex-col text-white">
              <NavLink className="text-3xl font-medium" to='#Services'>Services</NavLink>
              <NavLink className="text-3xl font-medium" to='#Works'>Our Work</NavLink>
              <NavLink className="text-3xl font-medium" to='#Testimonials'>Testimonial</NavLink>
              <NavLink className="text-3xl font-medium" to='#Contact'>Contact</NavLink>
            </div>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <h2 className="text-2xl xl:text-4xl font-bold text-white font-[ME]">Studio.</h2>
          </div>
          <div className="">
            <div className="xl:hidden">
              <button onClick={() => (setMenuActive(!menuActive))} className="text-2xl gap-2 flex flex-col text-white">
                <div className={`bg-white h-[.5px] w-8 transform transition-transform duration-300 ease-in-out ${menuActive ? 'rotate-45 translate-y-2' : ''}`}></div>
                <div className={`bg-white h-[.5px] w-8 transform transition-transform duration-300 ease-in-out ${menuActive ? '-rotate-45 -translate-y-0' : ''}`}></div>
              </button>
            </div>
            <div className="hidden xl:flex gap-10 text-white">
              <NavLink to='#Services'>Services</NavLink>
              <NavLink to='#Works'>Our Work</NavLink>
              <NavLink to='#Testimonials'>Testimonial</NavLink>
              <NavLink to='#Contact'>Contact</NavLink>
            </div>
          </div>
          <div className="hidden xl:block">
            <a className="hidden xl:flex gap-2 items-center justify-center" href="">
              <button className="p-2 px-5 rounded-full text-sm font-semibold text-[#1f1f1f] bg-white">Book a Call</button>
              <button className="p-2 rounded-full text-[#1f1f1f] bg-white">
                <IoMdCall size={20} />
              </button>
            </a>
          </div>
        </div>
        <div className="w-full h-[85vh] flex flex-col items-center justify-center text-white">
          <h2 className="flex flex-col md:flex-row text-center gap-4 xl:gap-8 text-5xl md:text-6xl xl:text-8xl font-semibold">
            <span className="before:block before:rounded-md before:absolute before:-inset-1 before:-skew-x-6 before:bg-[#85f854] relative inline-block -z-10">
              <span className="p-5 relative font-[ME] text-[#1f1f1f]">Virtual</span>
            </span>
            <span className="font-[ME]">Studio</span>
          </h2>
          <h2 className="p-7 px-2 xl:p-5 text-3xl xl:text-5xl text-center font-semibold leading-8 xl:leading-none font-[ME]">Content Creation Based Agency</h2>
          <p className="p-2 px-0 text-center text-lg md:text-xl w-[80%] xl:w-[60%]">We are a creative agency focuses on making quality content for you personal brand and brings your idea to real life. We collaborate with influencers and businesses to help them in making best quality content at affordable pricing.</p>
        </div>
      </div>
    </>
  )
}

export default Home