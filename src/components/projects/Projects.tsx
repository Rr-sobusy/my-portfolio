"use client";

import React, { FC } from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import Image from "next/image";


type ProjectProps = {
  title: string;
  description: string;
};

const Project: FC<ProjectProps> = ({ title, description }) => {
  const swiper = useSwiper()
  return (
    <div className="flex px-5 py-[2rem] m-3 bg-[#272727] text-white rounded-xl gap-3 flex-col md:flex-row">
      <div className="flex-1 flex flex-col">
        <h1 className="text-xl tracking-wide font-poppins mb-1 text-slate-100 font-bold">
          {title}
        </h1>
        <p className="text-slate-300 tracking-wide text-sm font-poppins">
          {description}
        </p>
      </div>
      <div className="md:max-w-[50%] max-w-[80%] mx-auto">
        <Swiper
          // install Swiper modules
          className="w-full"
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          speed={1000}

        >
          <SwiperSlide>
            <Image className="rounded-xl" alt="Image" width={100} height={800} src="/snapshot.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="rounded-xl" alt="Image" width={800} height={800} src="/snapshot.png" />
          </SwiperSlide>
          <SwiperSlide>
            <Image className="rounded-xl" alt="Image" width={800} height={800} src="/snapshot.png" />
          </SwiperSlide>


          ...
        </Swiper>
      </div>

    </div>
  );
};

export default Project;
