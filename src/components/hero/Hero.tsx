"use client";
import React from "react";
import BgAnimation from "./BgAnimation";
import { TypeAnimation } from "react-type-animation";
import CustomButton from "@/app/common/CustomButton";
import { BiSolidDownArrowAlt } from "react-icons/bi";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  React.useEffect(()=>{
    AOS.init({
      duration: 800,
      once: true,
    })
  },[])
  return (
    <section data-aos="fade-right" id="home" className="flex flex-col lg:flex-row mx-4">
      <div className="flex flex-col justify-center flex-1 md:mt-[4.5rem] mt-[9.5rem]">
        <h1 className="lg:text-5xl -mt-[5rem] text-[2.05rem] text-slate-200 font-poppins font-semibold leading-snug tracking-wider max-w-[400px] lg:max-w-[650px]">
          Hi I&apos;m Rex Randy, an&nbsp;
          <span className="leading-snug tracking-wider __gradient-text">
            aspiring
          </span>
          &nbsp;
          <TypeAnimation
            sequence={["Fullstack Developer.", 2000, "Tech Enthusiast.", 2000]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[13px] leading-6 tracking-wider font-poppins mt-7 text-slate-300">
          My hobby is bringing up the concepts and ideas of coding to a
          desirable output that can be benificial for businesses for managing
          and structuring their datas. I have a strong passion for creating a
          neat and readable sets of code while following the principles of UI/UX
          design systems.
        </p>

        <div className="flex justify-start gap-5 py-8">
          <CustomButton className="flex items-center" variant="gradient">
            Download C.V&nbsp;
            <span className="animate-bounce">
              <BiSolidDownArrowAlt size={32} />
            </span>
          </CustomButton>
          <CustomButton variant="outlined">
            <a target="_blank" href="https://github.com/Rr-sobusy">
              Github Profile
            </a>
          </CustomButton>
        </div>
      </div>
      <div className="flex-1 hidden lg:block">
        <BgAnimation />
      </div>
    </section>
  );
};

export default Hero;
