"use client";
import { ProjectType } from "@/data/Projects";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ImageCarousel({ project }: { project?: ProjectType }) {
  if (!project) {
    return <div>Project data not available</div>; // 또는 로딩 스피너나 다른 처리
  }

  return (
    <div className="z-15">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        className="lg:w-[40vw] lg:h-[40vh] w-[80vw] h-[50vh]"
      >
        {project.slideImg.map((img, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center lg:w-[40vw] lg:h-[40vh] w-[80vw] h-[50vh]"
          >
            <img
              src={img}
              alt={`Slide ${img}`}
              className="object-contain lg:w-[40vw] lg:h-[40vh] w-[80vw] h-[50vh]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
