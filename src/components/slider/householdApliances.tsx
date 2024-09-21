import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import calculateDiscountedPrice from "@/app/until/calclutoreOffer";
import convertToPersianNumber from "@/app/until/convertPersianNumber";
import formatPriceWithCommas from "@/app/until/formatPriceCommes";

const imageSrcs = [
  {
    src: "/HouseholdApliances/1.webp",
    titel: "یخچال فریزر ساید بای ساید ایکس ویژن 30 فوت مدل TS666-AWD",
    price: 32000000,
    discount: 10,
  },
  {
    src: "/HouseholdApliances/2.webp",
    titel: "پنکه پارس خزر مدل FSR-SHIBA",
    price: 21500000,
    discount: 5,
  },
  {
    src: "/HouseholdApliances/3.webp",
    titel: "یخچال فریزر دو قلو الکترواستیل 38 فوت سری پرایم پلاس مدل ES24 T",
    price: 52000000,
    discount: 7,
  },
  {
    src: "/HouseholdApliances/4.webp",
    titel: "یخچال فریزر دیپوینت 30 فوت مدل BOSS S",
    price: 8500000,
    discount: 8,
  },
  {
    src: "/HouseholdApliances/5.webp",
    titel: "ماشین لباسشویی اسنوا 8 کیلویی مدل SWM-81W20",
    price: 72000000,
    discount: 12,
  },
  {
    src: "/HouseholdApliances/6.webp",
    titel: "ماشین لباسشویی پاکشوما 9.6‌ کیلویی مدل PTN 9604 AJ",
    price: 5000000,
  },
  {
    src: "/HouseholdApliances/7.webp",
    titel: "یخچال فریزر امرسان 14 فوت مدل TFH14T",
    price: 35000000,
  },
  {
    src: "/HouseholdApliances/8.webp",
    titel: "جاروبرقی سایا مدل Merlin",
    price: 41000000,
    discount: 4,
  },
  {
    src: "/HouseholdApliances/9.webp",
    titel: "آبسردکن ایستکول مدل TM-CW409N",
    price: 64000000,
    discount: 15,
  },
  {
    src: "/HouseholdApliances/10.webp",
    titel: "یخچال فریزر الکترواستیل 27 فوت سری استار پلاس مدل ES27T",
    price: 64000000,
    discount: 15,
  },
];

export default function HouseHoldApliances() {
  return (
    <Swiper
      dir="rtl"
      spaceBetween={0}
      slidesPerView={5}
      breakpoints={{
        1024: {
          slidesPerView: 6,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        480: {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
        240: {
          slidesPerView: 2.5,
          spaceBetween: 0,
        },
      }}
      
      pagination={false}
      scrollbar={{ draggable: true }}
      style={{ display: "flex" }}
      modules={[Navigation]} 
    >
      {imageSrcs.map((item, index) => {
        const discountedPrice = calculateDiscountedPrice(
          Number(item.price),
          Number(item.discount)
        );

        return (
          <SwiperSlide
            className="cursor-pointer p-4 flex flex-col justify-between border-l border-r border-gray-100 "
            key={index}
          >
            <div className="flex flex-col justify-between items-center">
              <div className=" flex w-10/12 flex-col items-center">
                <Image
                  className="w-5/12"
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  layout="responsive"
                  width={50}
                  height={50}
                  priority
                />
                <h5 className="text-sm text-center mt-4">{item.titel}</h5>
              </div>
              <div className="w-full mt-4">
                {item.discount ? (
                  <div className="p-2 ">
                    <div className="flex  justify-between items-center">
                      <p className="text-sm p-1 bg-red-500 rounded text-white">
                        {convertToPersianNumber(item.discount)}%
                      </p>
                      <p className="text-sm font-semibold text-red-500">
                        {convertToPersianNumber(
                          formatPriceWithCommas(discountedPrice)
                        )}{" "}
                        تومان
                      </p>
                    </div>
                    <p className="text-xs text-end font-semibold line-through text-gray-500 mt-1">
                      {convertToPersianNumber(
                        formatPriceWithCommas(item.price)
                      )}{" "}
                      تومان
                    </p>
                  </div>
                ) : (
                  <p className="text-sm p-2 font-semibold text-end text-black">
                    {convertToPersianNumber(formatPriceWithCommas(item.price))}{" "}
                    تومان
                  </p>
                )}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
     
    </Swiper>
  );
}
