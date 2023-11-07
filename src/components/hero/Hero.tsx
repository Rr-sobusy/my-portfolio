"use client";
import React from "react";
import BgAnimation from "./BgAnimation";
import { TypeAnimation } from "react-type-animation";
import CustomButton from "@/app/common/CustomButton";
import {BiSolidDownArrowAlt} from 'react-icons/bi'
import Image from "next/image";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col lg:flex-row">
      <div className="flex flex-col flex-1 mt-[4.5rem]">
        <h1 className="lg:text-6xl text-4xl text-slate-200 mt-[3.5rem] font-poppins font-semibold leading-snug tracking-wider max-w-full lg:max-w-[650px]">
          Hi I'm Rex Randy, an&nbsp;
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
        <p className="leading-6 tracking-wider mt-7 text-md text-slate-400">
          Hi my name is Rex Randy Hernandez. My hobby is bringing up the
          concepts and ideas of coding to a desirable output that can be
          benificial for businesses for managing and structuring their datas. I
          have a strong passion for creating a neat and readable sets of code
          while following the principles of UI/UX design systems.
        </p>

        <div className="flex justify-start gap-5 py-8">
          <CustomButton className="flex items-center" variant="gradient">
            About Me&nbsp;
            <span className="animate-bounce">
              <BiSolidDownArrowAlt size={32} />
            </span>
          </CustomButton>
          <CustomButton variant="outlined"><a href="https://github.com/Rr-sobusy">Github Profile</a></CustomButton>
        </div>

        {/* ** Skills *** */}
        <div className="flex flex-col items-center py-4 border-t mt-7 border-slate-600">
          <p className="text-2xl font-semibold tracking-widest text-white my-9 font-poppins">
            Skills
          </p>

          <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
            <li className="flex flex-col items-center justify-between gap-4 px-5 py-3 tracking-wider bg-gray-700 text-md font-poppins text-slate-200 rounded-xl">
              <Image src="/stacks/react2.svg" width={50} height={50} alt="" />
              <p className="font-poppins overflow-clip text-slate-300">ReactJs</p>
            </li>
            <li className="flex flex-col items-center justify-between gap-4 px-5 py-3 tracking-wider bg-gray-700 text-md font-poppins text-slate-200 rounded-xl">
              <Image src="/stacks/tw.svg" width={50} height={50} alt="" />
              <p className="font-poppins overflow-clip text-slate-300">Tailwind css</p>
            </li>
            <li className="flex flex-col items-center justify-between gap-4 px-5 py-3 tracking-wider bg-gray-700 text-md font-poppins text-slate-200 rounded-xl">
              <Image src="/stacks/psql.svg" width={50} height={50} alt="" />
              <p className="font-poppins overflow-clip text-slate-300">Postgresql</p>
            </li>
            <li className="flex flex-col items-center justify-between gap-4 px-5 py-3 tracking-wider bg-gray-700 text-md font-poppins text-slate-200 rounded-xl">
              <Image src="/stacks/Nest.js.svg" width={50} height={50} alt="" />
              <p className="font-poppins overflow-clip text-slate-300">NestJs</p>
            </li>
            <li className="flex flex-col items-center justify-between gap-4 px-5 py-3 tracking-wider bg-gray-700 text-md font-poppins text-slate-200 rounded-xl">
              <Image src="/stacks/next.svg" width={50} height={50} alt="" />
              <p className="font-poppins overflow-clip text-slate-300">Nextjs</p>
            </li>
          </ul>
          
        </div>
      </div>
      <div className="flex-1 hidden w-1/2 border border-white h-1/2 md:block">
        <BgAnimation />
      </div>
    </section>
  );
};

export default Hero;
