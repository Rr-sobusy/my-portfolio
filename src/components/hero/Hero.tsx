import React from "react";
import BgAnimation from "./BgAnimation";
import TypingAnimation from "../typinganimation/type";
type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col h-[calc(100vh*2)] lg:flex-row">
      <div className="flex flex-col flex-1 mt-[4.5rem]">
        <h1 className="lg:text-6xl text-4xl text-slate-200 font-poppins font-semibold leading-snug tracking-wider max-w-full lg:max-w-[650px]">
          Hi I'm Rex Randy, an <span className="__gradient-text">aspiring</span>&nbsp;
          <TypingAnimation typedStrings={["Fullstack Developer", "Tech Enthusiast"]} />
        </h1>
        <p className="mt-5 text-lg tracking-wide text-slate-400 font-poppins">Hi my name is Rex Randy E. Hernandez</p>
          
      </div>
      <div className="flex-1 w-1/2 h-1/2">
        <BgAnimation />
      </div>
    </section>
  );
};

export default Hero;
