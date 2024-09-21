import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const imageSrcs: string[] = [
  "/brand/1.webp",
  "/brand/3.webp",
  "/brand/2.webp",
  "/brand/4.webp",
  "/brand/5.webp",
  "/brand/6.webp",
  "/brand/7.webp",
  "/brand/8.webp",
  "/brand/9.webp",
  "/brand/10.webp",
  "/brand/11.webp",
  "/brand/12.webp",
  "/brand/13.webp",
  "/brand/14.webp",
  "/brand/15.webp",
  "/brand/16.webp",
  "/brand/17.webp",
];

const BrandSlider = () => {
  return (
    <div className="flex max-md:flex-col items-center md:border-2  border-amber-400 max-md:border-y max-md:rounded-none rounded-xl">
      <div className="bg-amber-300 w-1/6 p-8 max-md:p-2 max-md:rounded-r-sm rounded-r-xl max-md:w-full">
        <div className="flex flex-col max-md:flex-row gap-2 items-center justify-center">
          <div>
            <FontAwesomeIcon
              className="h-10 max-md:h-5"
              color="white"
              icon={faCircleCheck}
            />
          </div>
          <div className="text-white text-lg max-md:text-sm">
            برند های منتخب
          </div>
        </div>
      </div>
      <Swiper
        className="w-5/6 max-md:w-full"
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
        {imageSrcs.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center items-center h-full border-l border-gray-200 pl-4">
              <Image
                width={600}
                height={600}
                src={src}
                alt={`Brand ${index + 1}`}
                className="cursor-pointer w-1/2 h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSlider;
