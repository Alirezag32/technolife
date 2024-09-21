import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import "swiper/css/effect-fade";

const imageSrcs: string[] = [
  "/circleSlider/1.webp",
  "/circleSlider/3.webp",
  "/circleSlider/2.webp",
  "/circleSlider/4.webp",
  "/circleSlider/5.webp",
  "/circleSlider/6.webp",
  "/circleSlider/7.webp",
  "/circleSlider/8.webp",
  "/circleSlider/9.webp",
  "/circleSlider/10.webp",
];

export default function CircleSlider() {
  return (
    <Swiper
      
      spaceBetween={10}
      slidesPerView={7}
      loop={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        1024: {
          slidesPerView: 6,
        },
        600: {
          slidesPerView: 5,
        },
        480: {
          slidesPerView: 3.5,
        },
        0: {
          slidesPerView:3.5 ,
        }
      }}
      modules={[Autoplay]}
      dir="rtl" 
      className="mySwiper"
    >
      {imageSrcs.map((src, index) => (
        <SwiperSlide key={index}>
          <div className="cursor-pointer p-2">
            <Image
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-full border-2 border-red-600 p-1 hover:border-4 box-border hover:scale-100 transition-transform"
              width={130}
              height={130}
              priority
              objectFit="cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
