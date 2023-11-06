"use client"
import React from "react";
import BgAnimation from "./BgAnimation";
import { TypeAnimation } from 'react-type-animation';
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col h-[calc(100vh*2)] lg:flex-row">
      <div className="flex flex-col flex-1 mt-[4.5rem]">
        <h1 className="lg:text-6xl text-4xl text-slate-200 mt-[3.5rem] font-poppins font-semibold leading-snug tracking-wider max-w-full lg:max-w-[650px]">
          Hi I'm Rex Randy, an <span className="__gradient-text leading-snug tracking-wider">aspiring</span>&nbsp;
          <TypeAnimation
            sequence={[
              'Fullstack Developer.',
              2000,
              'Tech Enthusiast.',
              1000

            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="mt-7 text-lg tracking-wider text-slate-300 font-poppins">Hi my name is Rex Randy Hernandez. My hobby is bringing up the concepts and ideas of </p>

      </div>
      <div className="flex-1 w-1/2 h-1/2">
        <BgAnimation />
      </div>
    </section>
  );
};

export default Hero;
