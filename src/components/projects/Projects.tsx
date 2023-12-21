"use client";

import React, { FC } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";


function SlideNextButton() {
    const swiper = useSwiper(); 
    return (
      <button onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    );
  }


type ProjectProps = {
  title: string;
  description: string;
};

const Project: FC<ProjectProps> = ({ title, description }) => {
    const swiper= useSwiper()
  return (
    <div className="flex px-5 py-[2rem] m-3  text-white rounded-xl  flex-col md:flex-row">
      <div className="flex-1">
        <h1 className="text-xl tracking-wide font-poppins text-slate-100 font-bold">
          {title}
        </h1>
        <p className="text-slate-300 tracking-wide text-sm font-poppins">
          {description}
        </p>
      </div>
      <div className="max-w-[50%]">
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          className="mySwiper"
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <SlideNextButton />
    </div>
  );
};

export default Project;
