import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";


const imageSrcs = [
  {
    src: "/aboutTechnolifeBlog/1.webp",
    titel: "مقایسه گلکسی زد فولد ۶ با زد فولد ۵",
  },
  { src: "/aboutTechnolifeBlog/3.webp", titel: "آموزش تغییر پسورد انواع مودم" },
  { src: "/aboutTechnolifeBlog/2.webp", titel: "بهترین بازی های فکری" },
  { src: "/aboutTechnolifeBlog/4.webp", titel: "بهترین گوشی تا 12 میلیون" },
  { src: "/aboutTechnolifeBlog/5.webp", titel: "روش اتصال گوشی به ضبط ماشین" },
  {
    src: "/aboutTechnolifeBlog/6.webp",
    titel: "بهترین اپلیکیشن یادگیری زبان آلمانی",
  },
  { src: "/aboutTechnolifeBlog/7.webp", titel: "آخر هفته چه فیلمی ببینیم؟" },
];

const AboutTechnolifeBlog = () => {
  return (
    <>
      <div className="w-full my-12 items-center hidden md:flex">
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={false}
          breakpoints={{
            0: {
              slidesPerView: 2.5,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {imageSrcs.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col cursor-pointer m-4 overflow-hidden rounded-lg h-[250px]">
                <Image
                  width={900}
                  height={900}
                  src={item.src}
                  alt={`Brand ${index + 1}`}
                  className="object-cover h-2/3 w-full"
                />
                <div className="bg-gray-950 text-white p-4 text-center flex items-center justify-center h-1/3">
                  {item.titel}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="md:hidden flex flex-col w-full my-12 items-center gap-8">
        {imageSrcs.map((item, index) => (
          <div
            key={index}
            className="flex flex-col overflow-hidden w-9/12 rounded-lg"
          >
            <Image
              width={900}
              height={900}
              src={item.src}
              alt={`Brand ${index + 1}`}
              className="cursor-pointer object-cover h-2/3 w-full"
            />
            <div className="bg-gray-400 text-white p-4 text-center flex items-center justify-center h-1/3">
              {item.titel}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutTechnolifeBlog;
