import React from 'react'
import Strategy from '../assets/Works/Strategy.png'
import Research from '../assets/Works/Content-Research.png'
import Storytelling from '../assets/Works/Storytelling.png'
import Filming from '../assets/Works/Video-Filming.png'
import Editing from '../assets/Works/Video-Editing.png'
import Designing from '../assets/Works/Graphic-Design.png'

const Works = () => {
  return (
    <>
      <div className="w-full min-h-screen p-6 xl:p-12 text-white flex flex-col items-center bg-[#1f1f1f]" id="Works">
        <h4 className="text-lg md:text-xl xl:text-2xl font-semibold text-center text-[#85f854]">Why Choose Us</h4>
        <h2 className="p-5 text-2xl md:text-4xl leading-7 xl:text-5xl font-bold xl:font-black text-center font-[ME]">6 reasons to collaborate with us</h2>
        <p className="w-full xl:w-[60%] md:text-lg font-light text-center">We are not just about creating content. We craft digital experience and a strong personal brand and increase your potential. Let's give us a chance and see the magic happening.</p>
        <div className="p-10 px-0 xl:p-16 xl:pb-0 w-full flex gap-5 xl:gap-10 items-center justify-center flex-wrap">

          <div className="w-full md:w-[45%] xl:w-[60%] h-[65vh] md:h-[50vh] xl:h-[70vh] p-4 xl:p-8 xl:px-12 rounded-2xl bg-white">
            <div className="w-full h-[40%] xl:h-1/2 flex justify-between">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-black">
                <span className="text-lg font-black font-[ME]">01.</span>
              </div>
              <div className="md:h-full">
                <img className="w-full h-full object-cover" src={Strategy} alt="" />
              </div>
            </div>
            <div className="p-6 px-0 xl:p-8 xl:px-0 w-full h-[60%] xl:h-1/2 flex flex-col justify-between text-black">
              <h2 className="text-4xl font-semibold md:text-5xl">Strategy & Planning</h2>
              <p className="md:text-lg xl:font-light">We begin with in-depth research and clear goal-setting, followed by a comprehensive content calendar. By monitoring performance and making data-driven adjustments, we ensure maximum engagement and measurable results for our clients.</p>
            </div>
          </div>

          <div className="w-full md:w-[45%] xl:w-[35%] h-[65vh] md:h-[50vh] xl:h-[70vh] p-4 xl:p-8 rounded-2xl bg-white">
            <div className="w-full h-[40%] xl:h-[40%] flex justify-between">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-black">
                <span className="text-lg font-black font-[ME]">02.</span>
              </div>
              <div className="w-[65%] md:w-1/2 h-full">
                <img className="h-full object-cover" src={Research} alt="" />
              </div>
            </div>
            <div className="p-6 px-0 xl:p-8 xl:px-0 w-full h-[60%] flex flex-col justify-between text-black">
              <h2 className="text-4xl font-semibold md:text-5xl">Content Research</h2>
              <p className="md:pt-5 md:text-lg xl:font-light">Involving in-depth analysis of target audiences, industry trends, and competitor strategies. Our content is relevant, engaging, and effective. We create compelling content that meets client goals and resonates with their audience.</p>
            </div>
          </div>

          <div className="w-full md:w-[45%] xl:w-[35%] h-[65vh] md:h-[50vh] xl:h-[70vh] p-4 xl:p-8 rounded-2xl bg-white">
            <div className="w-full h-[40%] flex justify-between">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-black">
                <span className="text-lg font-black font-[ME]">03.</span>
              </div>
              <div className="w-[65%] xl:w-1/2 h-full">
                <img className="h-full object-cover" src={Storytelling} alt="" />
              </div>
            </div>
            <div className="p-6 px-0 xl:p-8 xl:px-0 w-full h-[60%] flex flex-col justify-between text-black">
              <h2 className="text-4xl font-semibold md:text-5xl">Storytelling</h2>
              <p className="md:pt-5 md:text-lg xl:font-light">We craft stories that resonate emotionally with audiences, making complex ideas accessible and memorable. Through compelling characters, relatable experiences, and engaging plots, we create content that connects deeply and drives meaningful engagement.</p>
            </div>
          </div>

          <div className="w-full md:w-[45%] xl:w-[60%] h-[65vh] md:h-[50vh] xl:h-[70vh] p-4 xl:p-8 xl:px-12 rounded-2xl bg-white">
            <div className="w-full h-[40%] xl:h-1/2 flex justify-between">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-black">
                <span className="text-lg font-black font-[ME]">04.</span>
              </div>
              <div className="md:h-full">
                <img className="w-full h-full object-cover" src={Filming} alt="" />
              </div>
            </div>
            <div className="p-6 px-0 xl:p-8 xl:px-0 w-full h-[60%] xl:h-1/2 flex flex-col justify-between text-black">
              <h2 className="text-4xl font-semibold md:text-5xl">Video Filming</h2>
              <p className="md:text-lg xl:font-light">Combining creativity with technical expertise to produce high-quality visuals. We handle everything from scripting and storyboarding to shooting, ensuring each video aligns with the client's vision and engages their audience effectively.</p>
            </div>
          </div>

          <div className="w-full md:w-[45%] xl:w-[60%] h-[65vh] md:h-[50vh] xl:h-[70vh] p-4 xl:p-8 xl:px-12 rounded-2xl bg-white">
            <div className="w-full h-[40%] xl:h-1/2 flex justify-between">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-black">
                <span className="text-lg font-black font-[ME]">05.</span>
              </div>
              <div className="md:h-full">
                <img className="w-full h-full object-cover" src={Editing} alt="" />
              </div>
            </div>
            <div className="p-6 px-0 xl:p-8 xl:px-0 w-full h-[60%] xl:h-1/2 flex flex-col justify-between text-black">
              <h2 className="text-4xl font-semibold md:text-5xl">Video Editing</h2>
              <p className="md:text-lg xl:font-light">Turning raw footage into polished, engaging content. Our skilled editors use advanced techniques to enhance visuals, add effects, and ensure seamless transitions. We focus on storytelling, pacing, and quality to create videos that captivate and resonate with audiences.</p>
            </div>
          </div>

          <div className="w-full md:w-[45%] xl:w-[35%] h-[65vh] md:h-[50vh] xl:h-[70vh] p-4 xl:p-8 rounded-2xl bg-white">
            <div className="w-full h-[40%] flex justify-between">
              <div className="w-16 h-16 rounded-full flex items-center justify-center text-white bg-black">
                <span className="text-lg font-black font-[ME]">06.</span>
              </div>
              <div className="w-[45%] xl:w-1/2 h-full">
                <img className="h-full object-cover" src={Designing} alt="" />
              </div>
            </div>
            <div className="p-6 px-0 xl:p-8 xl:px-0 w-full h-[60%] flex flex-col justify-between text-black">
              <h2 className="text-4xl font-semibold md:text-5xl">Graphic Design</h2>
              <p className="md:pt-5 md:text-lg xl:font-light">Our talented designers create eye-catching graphics that align with brand identity and engage audiences. We ensure every design element communicates the client's message effectively and beautifully that grab attention and encourage clicks.</p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Works