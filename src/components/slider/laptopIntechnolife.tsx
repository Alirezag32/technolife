import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import calculateDiscountedPrice from "@/app/until/calclutoreOffer";
import convertToPersianNumber from "@/app/until/convertPersianNumber";
import formatPriceWithCommas from "@/app/until/formatPriceCommes";

const imageSrcs = [
  {
    src: "/laptopIntechnolife/1.webp",
    titel: "لپ تاپ اپل 13.6 اینچی مدل MacBook Air MRXN3 M3 2024 8GB 256GB",
    price: 32000000,
    discount: 10,
  },
  {
    src: "/laptopIntechnolife/2.webp",
    titel:
      "لپ تاپ ایسوس 16 اینچی مدل ROG Strix G614JV i7 13650H 24GB 1TB SSD RTX 4060",
    price: 21500000,
    discount: 5,
  },
  {
    src: "/laptopIntechnolife/3.webp",
    titel:
      "لپ تاپ ام اس آی 14 اینچی مدل Stealth 14 AI Studio A1VFG U7 155H 32GB 1TB RTX4060",
    price: 52000000,
    discount: 7,
  },
  {
    src: "/laptopIntechnolife/4.webp",
    titel: "لپ تاپ لنوو 15.6 اینچی مدل  IdeaPad5 i5 1235U 16GB 1TB MX550",
    price: 8500000,
    discount: 8,
  },
  {
    src: "/laptopIntechnolife/5.webp",
    titel: "لپ تاپ مایکروسافت 12.4 اینچی مدل Surface Laptop Go 2 i5 8GB 256GB",
    price: 72000000,
    discount: 12,
  },
  {
    src: "/laptopIntechnolife/6.webp",
    titel: "لپ تاپ دل 15.6 اینچی مدل Vostro 3520 i3 1215U 8GB 500GB",
    price: 5000000,
  },
  {
    src: "/laptopIntechnolife/7.webp",
    titel:
      "لپ تاپ اچ پی 16.1 اینچی مدل Victus 16 R100 i7 14700HX 64GB 1TB RTX4050",
    price: 35000000,
  },
  {
    src: "/laptopIntechnolife/8.webp",
    titel: "لپ تاپ دل 14 اینچی مدل Latitude 7420 i5 1145G7 16GB 256GB",
    price: 41000000,
    discount: 4,
  },
  {
    src: "/laptopIntechnolife/9.webp",
    titel:
      "لپ تاپ ایسر 15.6 اینچی مدل Aspire 5 A515 i5 1235U 16GB 512GB RTX2050",
    price: 64000000,
    discount: 15,
  },
];

export default function LaptopInTechnolife() {
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
