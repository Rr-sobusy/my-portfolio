import React from "react";
import Image from "next/image";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about" className="flex flex-col md:flex-row h-screen">
          <div className="flex items-center justify-center flex-1">
            <Image src="/icons/about.png" height={400} width={400} alt="" />
          </div>
          <div className="flex-1 border border-white">
            <h1 className="w-full text-4xl font-bold tracking-wider text-center __sample-text text-slate-100 font-poppins">
              About
            </h1>
            <p className="text-slate-200">
              rex
            </p>
          </div>
    </section>
  );
};

export default About;
