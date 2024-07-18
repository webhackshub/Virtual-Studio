import React, { useState } from 'react';
import Service from '../Components/Service';
import { FaArrowRightLong } from 'react-icons/fa6';
import VideoEditing from '../assets/Services/Video-Editing.png';
import ScriptWritting from '../assets/Services/Script-Writting.png';
import SMM from '../assets/Services/SMM.png';
import VideoFilming from '../assets/Services/Video-Filming.png';
import TeamService from '../assets/Services/Team-Service.png'
import TeamWork from '../assets/Services/Team-Work.png'

const   Services = () => {
  const serviceData = [
    { order: "01.", service: "Video Editing", image: VideoEditing },
    { order: "02.", service: "Script Writting", image: ScriptWritting },
    { order: "03.", service: "SMM", image: SMM },
    { order: "04.", service: "Content Creation", image: VideoFilming }
  ];

  const [selectedService, setSelectedService] = useState(serviceData[0]);

  const serviceHandler = (serviceIndex) => {
    setSelectedService(serviceData[serviceIndex]);
  };

  return (
    <>
      <div className="w-full min-h-screen p-6 xl:p-12 pt-0 text-[#1f1f1f] bg-white">
        <div className="w-full xl:flex">
          <h2 className="w-full xl:w-1/2 h-full text-2xl md:text-3xl text-center leading-6 xl:text-start xl:text-5xl font-extrabold font-[ME]">Provides the best service with out of the box ideas.</h2>
          <p className="w-full xl:w-1/2 h-full p-4 px-0 text-center xl:text-start xl:px-12 text-base md:text-lg">A studio where influencers and businesses can build a strong personal brand. With years of experience and a deep understanding of crafting watchable content.</p>
        </div>
        <div className="w-full p-5 xl:p-20 xl:px-0 pb-0 px-0 flex flex-col xl:flex-row gap-5 xl:gap-10">
          <div className="w-full h-[25%] xl:w-[45%] xl:h-[55vh] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src={TeamService} alt="" />
          </div>
          <div className="w-full h-[25%] xl:w-[55%] xl:h-[55vh] rounded-2xl overflow-hidden">
            <img className="w-full h-full object-cover" src={TeamWork} alt="" />
          </div>
        </div>
        <div className="w-full min-h-[60vh]" id="Services">
          <div className="w-full text-center flex flex-col items-center xl:block xl:text-start p-10 px-0 xl:p-16 xl:px-0">
            <h2 className="flex gap-4 text-3xl md:text-4xl xl:text-5xl font-bold">
              <span className="font-[ME]">Our</span>
              <span className="before:block before:rounded-md before:absolute before:-inset-1 before:-skew-x-12 before:bg-[#85f854] relative inline-block">
                <span className="p-2 xl:p-5 relative font-[ME] text-[#1f1f1f]">Services</span>
              </span>
            </h2>
            <p className="w-full xl:w-[40%] p-2 xl:p-5 px-0 text-base md:text-xl">Our studio offers a range of content creation services to meet the unique needs of each client.</p>
          </div>
          <div className="w-full xl:h-[60vh] flex flex-col-reverse xl:flex-row gap-10 xl:gap-20">
            <div className="w-full xl:w-[40%] h-full flex flex-col gap-4 xl:gap-0 justify-between">
              {serviceData.map((item, index) => (
                <Service
                  key={index}
                  order={item.order}
                  service={item.service}
                  serviceHandler={() => serviceHandler(index)}
                  isSelected={selectedService.service === item.service}
                />
              ))}
            </div>
            <div className="w-full xl:w-[60%] h-full flex flex-col xl:flex-row gap-2 xl:gap-5">
              <div className="w-full h-[25vh] xl:w-[60%] xl:h-full">
                <img className="w-full h-full object-cover rounded-2xl" src={selectedService.image} alt="" />
              </div>
              <div className="w-full xl:w-[40%] xl:h-full flex gap-2 xl:gap-5 xl:flex-col">
                <div className="w-1/2 xl:w-full xl:h-1/2 p-4 md:p-5 rounded-2xl flex flex-col justify-between text-white bg-[#1f1f1f]">
                  <h4 className="md:text-lg leading-5">Ever wondered how the magic happens?</h4>
                  <div className="flex items-center justify-between">
                    <h2 className="w-[60%] pt-4 xl:pt-0 leading-5 text-xl md:text-2xl xl:text-3xl font-medium">See how we work</h2>
                    <button className="p-3 md:p-6 md:text-2xl rounded-full -rotate-45 bg-zinc-800">
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
                <div className="w-1/2 xl:w-full xl:h-1/2 p-4 xl:p-5 rounded-2xl flex flex-col justify-between text-[#1f1f1f] bg-[#85f854]">
                  <h4 className="md:text-lg leading-5">Looking for the experts who can bring your vision to life?</h4>
                  <div className="flex items-center justify-between">
                    <h2 className="w-[60%] pt-4 xl:pt-0 leading-5 text-xl md:text-2xl xl:text-3xl font-medium">Meet our expert</h2>
                    <button className="p-3 md:p-6 md:text-2xl rounded-full -rotate-45 text-zinc-800 bg-white">
                      <FaArrowRightLong />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;