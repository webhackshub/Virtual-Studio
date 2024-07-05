import React from 'react'
import Landscape from '../assets/About/Landscape.png'
import Portrait from '../assets/About/Portrait.png'

const About = () => {
  return (
    <>
      <div data-scroll data-scroll-section data-scroll-speed="0" className="w-full min-h-screen relative text-[#1f1f1f]" id="About">
        <div className="w-full h-full bg-white">
          <div className="w-full xl:h-[30%] p-6 px-4 xl:p-12 xl:flex">
            <h2 className="w-full h-full text-2xl md:text-3xl leading-6 text-center xl:text-start xl:text-5xl font-extrabold font-[ME]">Creative ideas. Small studios craft awesome content.</h2>
            <p className="w-full h-full p-4 px-0 xl:px-12 text-base text-center xl:text-start md:text-xl">Despite being a small team, we believe our size gives us an advantage, allowing us to craft more creative content and able to work closely with our clients to deliver the best content.</p>
          </div>
          <div className="w-full xl:h-[70%] px-4 xl:px-12 flex xl:flex-row flex-col gap-12 xl:gap-20">
            <div className="w-full xl:w-[65%] h-[85%] mt-4 rounded-2xl overflow-hidden">
              <img className="w-full h-full object-cover" src={Landscape} alt="" />
            </div>
            <div className="w-full h-[35vh] xl:w-[35%] xl:h-[75vh] relative">
              <div className="w-full h-full rounded-2xl absolute top-[-10%] right-0 overflow-hidden bg-[#F2F2F3]">
                <img className="w-full h-full object-cover" src={Portrait} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About