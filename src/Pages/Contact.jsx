import React from 'react'
import Project from '../assets/Contact/Project.png'
import { IoLogoWhatsapp } from "react-icons/io";

const   Contact = () => {
  return (
    <>
      <div className="w-full p-6 xl:p-12 xl:pb-20 xl:px-32" id="Contact">
        <div className="w-full flex flex-col xl:flex-row gap-5 xl:gap-10 items-center justify-center">
          <div className="w-full xl:w-[65%] h-[50vh] p-6 xl:p-8 rounded-2xl flex flex-col-reverse xl:flex-row items-start justify-center text-white bg-[#1f1f1f]">
            <div className="w-full xl:w-[60%] h-1/2 xl:h-full flex flex-col items-start justify-center">
              <h4 className="md:text-xl font-medium text-[#85f854]">Got a project in mind?</h4>
              <h2 className="p-2 md:p-5 md:px-0 text-xl md:text-4xl xl:text-[40px] xl:leading-[44px] font-bold xl:font-black font-[ME]">Let's discuss the details</h2>
              <button className="mt-4 xl:mt-10 p-3 px-5 xl:p-3 xl:px-6 rounded-full text-sm md:text-base font-medium text-[#1f1f1f] bg-white">Schedule a Call</button>
            </div>
            <div className="w-full xl:w-[40%] h-1/2 xl:h-full flex items-start xl:items-center xl:justify-center">
              <img className="w-1/2 xl:w-full h-full object-cover" src={Project} alt="" />
            </div>
          </div>
          <div className="w-full xl:w-[35%] xl:h-[50vh] p-6 xl:p-8 rounded-2xl flex flex-col items-start justify-between text-white bg-[#1f1f1f]">
            <div className="">
              <img className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1698510047345-ff32de8a3b74?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
              <h2 className="p-6 px-0 md:text-xl font-light">I'm Prashant, founder and the manager of the Virtual Studio. I will answer all your questions.</h2>
            </div>
            <div className="">
              <a className="p-3 px-5 xl:p-3 xl:px-6 flex gap-4 items-center text-sm md:text-base rounded-full text-[#1f1f1f] bg-white" href="">
                <span className="font-medium">Ask Questions</span>
                <span className="text-2xl text-[#25D366]"><IoLogoWhatsapp /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact