import Image from "next/image";


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
    src: "/chosen-stuff/1.webp",
    titel: "ساعت هوشمند میبرو لایت 2 Mibro Lite",
    price: 32000000,
    discount: 10,
  },
  {
    src: "/chosen-stuff/2.webp",
    titel: "کامپیوتر اداری اسمبل شده مدل AVA Plus i3 12100 16GB 256GB 1TB",
    price: 21500000,
    discount: 5,
  },
  {
    src: "/chosen-stuff/3.webp",
    titel: "کامپیوتر All in One اینوورس 24 اینچی مدل X2414B i5 12400 8GB 500GB",
    price: 52000000,
    discount: 7,
  },
  {
    src: "/chosen-stuff/4.webp",
    titel: "مودم روتر فیبر نوری تی پی-لینک مدل XN020-G3v",
    price: 8500000,
    discount: 10,
  },
  {
    src: "/chosen-stuff/5.webp",
    titel: "کاغذ A4 پاپکو مدل اپتیمم بسته 500 عددی",
    price: 720000,
 
  },
  {
    src: "/chosen-stuff/6.webp",
    titel: "هندزفری بی سیم انکر مدل Soundcore R50i",
    price: 5000000,
  },
  {
    src: "/chosen-stuff/7.webp",
    titel: "ریبون پرینتر لیبل زن مدل Wax Ribbon 110mm x 300m",
    price: 35000000,
  },
  {
    src: "/chosen-stuff/8.webp",
    titel: "هارد اس اس دی توین موس مدل Hyper H2 Ultra ظرفیت 1 ترابایت",
    price: 41000000,
    discount: 4,
  },
  {
    src: "/chosen-stuff/9.webp",
    titel: "تونر شارژ مشکی 1 کیلوگرمی سدرا مدل HP 1320 پریمیوم ",
    price: 64000000,
    discount: 15,
  },
  {
    src: "/chosen-stuff/10.webp",
    titel: " پایه خنک کننده لپ تاپ تسکو مدل TCLP 3116",
    price: 64000000,
    
  },
];

export default function ChosenStuff() {
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
            className="cursor-pointer p-4 max-sm:p-1 flex flex-col justify-between border-l border-r border-gray-100 "
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
                  <div className="p-2">
                    <div className="flex justify-between items-center">
                      <p className="text-xs sm:text-sm p-0.5 bg-red-500 rounded text-white">
                        {convertToPersianNumber(item.discount)}%
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-red-500 ">
                        {convertToPersianNumber(
                          formatPriceWithCommas(discountedPrice)
                        )}{" "}
                        تومان
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-end font-semibold line-through text-gray-500 mt-1 flex justify-end">
                      {convertToPersianNumber(
                        formatPriceWithCommas(item.price)
                      )}{" "}
                      <div className="max-xs:hidden">تومان</div>
                    </p>
                  </div>
                ) : (
                  <p className="text-xs sm:text-sm p-2 font-semibold text-end text-black">
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
