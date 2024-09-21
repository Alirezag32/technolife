import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import calculateDiscountedPrice from "@/app/until/calclutoreOffer";
import convertToPersianNumber from "@/app/until/convertPersianNumber";
import formatPriceWithCommas from "@/app/until/formatPriceCommes";
import { title } from "process";
const imageSrcs = [
  {
    src: "/SmartFlagships/1.webp",
    titel:
      "گوشی موبایل شیائومی مدل Redmi Note 13 Pro Plus 5G ظرفیت 512 گیگابایت رم 12 گیگابایت به همراه شارژر",
    price: 32000000, 
    discount: 10,
  },
  {
    src: "/SmartFlagships/2.webp",
    titel:
      "گوشی موبایل اپل مدل iPhone 11 TH/A نات اکتیو تک سیم کارت ظرفیت 64 گیگابایت رم 4 گیگابایت",
    price: 21500000,
    discount: 5,
  },
  {
    src: "/SmartFlagships/3.webp",
    titel:
      "گوشی موبایل اپل مدل iPhone 13 Pro RK/A نات اکتیو تک سیم کارت ظرفیت 512 گیگابایت رم 6 گیگابایت",
    price: 52000000, 
    discount: 7,
  },
  {
    src: "/SmartFlagships/4.webp",
    titel: "گوشی موبایل ریلمی مدل C53 4G ظرفیت 128 گیگابایت رم 6 گیگابایت",
    price: 8500000, 
    discount: 8,
  },
  {
    src: "/SmartFlagships/5.webp",
    titel:
      "گوشی موبایل سامسونگ گلکسی S23 Ultra 5G ظرفیت 512 گیگابایت رم 12 گیگابایت - ویتنام",
    price: 72000000, 
    discount: 12,
  },
  {
    src: "/SmartFlagships/6.webp",
    titel: "گوشی موبایل وکال مدل V1 Plus ظرفیت 128 گیگابایت رم 4 گیگابایتی",
    price: 5000000, 
  },
  {
    src: "/SmartFlagships/7.webp",
    titel: "گوشی موبایل شیائومی مدل 13T 5G ظرفیت 256 گیگابایت رم 12 گیگابایت",
    price: 35000000, 
  },
  {
    src: "/SmartFlagships/8.webp",
    titel:
      "گوشی موبایل شیائومی مدل 13T Pro 5G ظرفیت 512 گیگابایت رم 12 گیگابایت",
    price: 41000000,
    discount: 4,
  },
  {
    src: "/SmartFlagships/9.webp",
    titel:
      "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو LL/A تک سیم کارت ظرفیت128 گیگابایت رم 6 گیگابایت",
    price: 64000000, 
    discount: 15,
  },
  {
    src: "/SmartFlagships/10.webp",
    titel:
      "گوشی موبایل سامسونگ Galaxy S24 Ultra 5G ظرفیت 512 گیگابایت رم 12 گیگابایت - ویتنام",
    price: 82000000, 
  },
];

export default function SmartFlagshipsSlider() {
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
