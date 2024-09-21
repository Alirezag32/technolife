import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination , Navigation , Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const imageSrcs: string[] = [
  "/mainSlieder/1.webp",
  "/mainSlieder/3.png",
  "/mainSlieder/2.webp",
  "/mainSlieder/4.webp",
  "/mainSlieder/5.webp",
  "/mainSlieder/6.gif",
  "/mainSlieder/7.webp",
  "/mainSlieder/8.webp",
  "/mainSlieder/9.webp",
  "/mainSlieder/10.webp",
];

export default function MainSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      
    >
      {imageSrcs.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="w-full h-full cursor-pointer max-sm:h-[200px]">
            <Image
              className="h-full w-full"
              src={src}
              alt={`Slide ${index + 1}`}
              priority
              height={3000}
              width={2000}
            />
          </div>
        </SwiperSlide>
      ))}

      {/* <div className="swiper-button-prev bg-white !important text-black !important absolute bottom-[20px] right-[50px] z-10 p-2 rounded-full shadow-md">
        <i className="fas fa-chevron-left text-2xl"></i>
      </div>
      <div className="swiper-button-next bg-white !important text-black !important absolute bottom-[20px] right-[10px] z-10 p-2 rounded-full shadow-md">
        <i className="fas fa-chevron-right text-2xl"></i>
      </div> */}
    </Swiper>
  );
}
