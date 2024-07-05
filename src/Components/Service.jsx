import React from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';

const Service = ({ order, service, serviceHandler, isSelected }) => {
  return (
    <button
      onClick={serviceHandler}
      className={`w-full h-[8vh] xl:h-[20%] px-5 md:px-10 rounded-full text-[#1f1f1f] ${
        isSelected ? 'bg-[#1f1f1f] text-white' : 'bg-[#F2F2F3]'
      } transition-colors duration-300 ease-in-out`}
    >
      <div className="w-full h-full flex gap-2 xl:gap-5 items-center relative">
        <h2 className={`md:text-2xl font-bold font-[ME] transition-colors duration-300 ease-in-out ${isSelected ? 'text-[#85f854]' : 'text-[#1f1f1f]'}`}>{order}</h2>
        <h2 className="md:text-2xl font-bold font-[ME]">{service}</h2>
        <button className="md:text-2xl absolute right-0">
          <FaArrowRightLong />
        </button>
      </div>
    </button>
  );
};

export default Service;
