import React from 'react'
import Card from '../Components/Card'

const Pricing = () => {
  return (
    <>
      <div className="w-full min-h-screen pt-12 px-12 text-[#1f1f1f]" id="Pricing">
        <div className="w-full flex">
          <div className="w-[55%]">
            <h2 className="text-5xl font-bold">
              <span className="font-[ME]">The</span>
              <span className="m-4 mt-0 before:block before:rounded-md before:absolute before:-inset-1 before:-skew-x-12 before:bg-[#85f854] relative inline-block">
                <span className="p-5 relative font-[ME] text-[#1f1f1f]">Pricing</span>
              </span>
              <span className="font-[ME]">Behind our Perfect Solution</span>
            </h2>
          </div>
          <div className="w-[45%]">
            <p className="w-full h-full px-12 text-xl">We treat influecers and businesses as a part of our studio. The perfect solution for your content creation related problems.</p>
          </div>
        </div>
        <div className="w-full p-20 px-0 flex gap-10 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default Pricing