"use client";

import React, { FC, useEffect } from "react";

import Image from "next/image";

// slider js
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const sliderSettings = {
  className: "w-full md:max-h-[230px] max-h-[190px]",
  modules: [Navigation, Pagination, Scrollbar],
  spaceBetween: 50,
  slidesPerView: 1,
  navigation: true,
  pagination: true,
  speed: 1000,
};

import AOS from "aos";
import "aos/dist/aos.css";

import { ProjectTypes } from "@/types/Project-types";

type ComponentType = {
  project: ProjectTypes;
};

const Project: FC<ComponentType> = ({ project }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
    data-aos="zoom-in"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="2000"
      className="flex px-8 py-[2.5rem] m-3 bg-[#272727] text-white rounded-xl gap-3 flex-col md:flex-row"
    >
      <div className="flex flex-col flex-1">
        <h1 className="mb-1 text-xl font-bold tracking-wide font-poppins text-slate-100">
          {project.title}
        </h1>
        <p className="text-sm tracking-wide text-slate-300 font-poppins">
          {project.description}
        </p>
        <div className="grid w-full md:w-[90%] grid-cols-2 md:grid-cols-3 gap-2 mt-2">
          {project.stacks.map((stack, index) => (
            <p
              key={index}
              className="px-2 py-1 font-poppins text-sm font-semibold tracking-wider overflow-x-hidden rounded-xl bg-[#3A363C]"
            >
              {stack}
            </p>
          ))}
        </div>
        <a target="_black" href={project.githubRepo} className="m-2 underline cursor-pointer text-slate-200 font-poppins">
          Github repo
        </a>
      </div>
      <div className="md:max-w-[50%] h-[190px] md:h-[230px] max-w-[95%] mx-auto">
        {/* ***** Image Slider component****** */}
        <Swiper {...sliderSettings}>
          {project.imagesSrc.map((imgUrl, index) => (
            <SwiperSlide key={index}>
              <Image
                className="rounded-xl"
                alt="Image"
                width={800}
                height={800}
                src={imgUrl}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Project;
