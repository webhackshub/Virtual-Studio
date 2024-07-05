import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import { IoMailOutline } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full xl:h-[50vh] p-0 px-6 xl:p-12 text-white bg-[#0c0c0c]">

        <div className="w-full p-5 px-0 flex flex-col xl:flex-row gap-5 justify-between">

          <div className="w-full xl:w-[40%] flex gap-2 xl:gap-4 flex-col">
            <h2 className="text-lg xl:text-2xl font-bold font-[ME]">Studio.</h2>
            <p className="w-full xl:w-[75%] text-sm xl:text-lg font-light xl:leading-6 opacity-80">Virtual Studio is a creative content creation agency, focuses on builing a personal brand for our clients.</p>
          </div>
          <div className="w-full xl:w-[15%] flex gap-2 xl:gap-4 flex-col">
            <h2 className="text-lg xl:text-2xl font-medium xl:font-semibold">Company</h2>
            <ul className="">
              <Link to='#About'>
                <li><a className="text-sm xl:text-lg font-light opacity-80">About</a></li>
              </Link>
              <Link to='#Services'>
                <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Services</a></li>
              </Link>
              <Link to='#Works'>
                <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Works</a></li>
              </Link>
              <Link to='#Portfolio'>
                <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Portfolio</a></li>
              </Link>
              <Link to='#Testimonials'>
                <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Testimonials</a></li>
              </Link>
            </ul>
          </div>
          <div className="w-full xl:w-[15%] flex gap-2 xl:gap-4 flex-col">
            <h2 className="text-lg xl:text-2xl font-medium xl:font-semibold">Services</h2>
            <ul className="">
              <li><a className="text-sm xl:text-lg font-light opacity-80" href="">SMM</a></li>
              <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Video Editing</a></li>
              <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Script Writting</a></li>
              <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Graphic Designing</a></li>
              <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Video Filming</a></li>
              <li><a className="text-sm xl:text-lg font-light opacity-80" href="">Voice Dubbing</a></li>
            </ul>
          </div>
          <div className="w-full xl:w-[15%] flex gap-2 xl:gap-4 flex-col">
            <h2 className="text-lg xl:text-2xl font-medium xl:font-semibold">Contact</h2>
            <ul className="">
              <li>
                <span className="gap-2 flex items-center text-sm xl:text-lg font-light opacity-80">
                  <span><IoMailOutline /></span>
                  <span>virtual@studio.com</span>
                </span>
              </li>
              <li>
                <span className="gap-2 flex items-center text-sm xl:text-lg font-light opacity-80">
                  <span><IoLogoWhatsapp /></span>
                  <span>+91 79030 05374</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="w-full p-5 px-0 flex flex-col xl:flex-row gap-2 xl:gap-5 items-center justify-between">
          <span className="text-sm xl:text-lg opacity-80">©️2024 Virtual Studio. All rights reserved.</span>
          <div className="gap-4 flex">
            <a className="p-2 xl:p-3 text-sm xl:text-xl rounded-full opacity-80 border-[0.5px]" href=""><FaYoutube /></a>
            <a className="p-2 xl:p-3 text-sm xl:text-xl rounded-full opacity-80 border-[0.5px]" href=""><FaInstagram /></a>
            <a className="p-2 xl:p-3 text-sm xl:text-xl rounded-full opacity-80 border-[0.5px]" href=""><FaLinkedinIn /></a>
            <a className="p-2 xl:p-3 text-sm xl:text-xl rounded-full opacity-80 border-[0.5px]" href=""><FaXTwitter /></a>
            <a className="p-2 xl:p-3 text-sm xl:text-xl rounded-full opacity-80 border-[0.5px]" href=""><FaFacebook /></a>
            <a className="p-2 xl:p-3 text-sm xl:text-xl rounded-full opacity-80 border-[0.5px]" href=""><FaGithub /></a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer