import Image from "next/image";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import calculateDiscountedPrice from "@/app/until/calclutoreOffer";
import convertToPersianNumber from "@/app/until/convertPersianNumber";
import formatPriceWithCommas from "@/app/until/formatPriceCommes";
const imageSrcs = [
  {
    src: "/offerSlider/1.webp",
    titel: "گوشی موبایل آنر مدل 90 ظرفیت 512 گیگابایت رم 12 گیگابایت",
    price: 36000000,
    discount: 10,
  },
  {
    src: "/offerSlider/2.webp",
    titel: "دریل شارژی رونیکس مدل 8661 کامپکت براش لس",
    price: 3200000,
    discount: 5,
  },
  {
    src: "/offerSlider/3.webp",
    titel: "مانیتور ال جی مدل 22MR410-B سایز 22 اینچ",
    price: 4800000,
    discount: 7,
  },
  {
    src: "/offerSlider/4.webp",
    titel: "گوشی موبایل ریلمی مدل C53 4G ظرفیت 128 گیگابایت رم 6 گیگابایت",
    price: 7500000,
    discount: 8,
  },
  {
    src: "/offerSlider/5.webp",
    titel:
      "لپ تاپ اچ پی 16.1 اینچی مدل OMEN 16 wd0023nia i7 ...",
    price: 78000000,
    discount: 12,
  },
  {
    src: "/offerSlider/6.webp",
    titel:
      "گوشی موبایل وکال مدل V1 Plus ظرفیت 128 گیگابایت رم 4 گیگابایتی",
    price: 2500000,
    discount: 6,
  },
  {
    src: "/offerSlider/7.webp",
    titel:
      "هارد اس اس دی اینترنال وسترن دیجیتال مدل Blue SN580 NVMe ...",
    price: 2100000,
    discount: 9,
  },
  {
    src: "/offerSlider/8.webp",
    titel: "مینی فرز رونیکس مدل 3111  با توان بالا",
    price: 1200000,
    discount: 4,
  },
  {
    src: "/offerSlider/9.webp",
    titel:
      "گوشی موبایل اپل مدل آیفون 13 پرو مکس نات اکتیو LL/A تک سیم کارت ظرفیت128 گیگابایت رم 6 گیگابایت",
    price: 60000000,
    discount: 15,
  },
  {
    src: "/offerSlider/10.webp",
    titel: "هندزفری بلوتوثی اپل مدل AirPods Pro 2nd Generation 2023",
    price: 9500000,
    discount: 11,
  },
];

export default function OfferSlider() {
 

  return (
    <Swiper
      dir="rtl"
      spaceBetween={20}
      slidesPerView={5}
      breakpoints={{
        1024: {
          slidesPerView: 5,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween:0,
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
      scrollbar={{ draggable: false }}
      className="flex  "
      style={{display : "flex"}}
    >
      {imageSrcs.map((item, index) => {
          const discountedPrice = calculateDiscountedPrice(
            Number(item.price),
            Number(item.discount)
          );

        return (
          <SwiperSlide
            className="cursor-pointer ml-[20px] pb-2 flex flex-col justify-between border-l border-r border-gray-50 "
            key={index}
          >
            <div className="flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <Image
                  src={item.src}
                  alt={`Slide ${index + 1}`}
                  className="w-24 h-32 sm:w-20 sm:h-28 md:w-32  md:h-40"
                  priority
                  width={200}
                  height={200}
                />
                <h5 className="text-sm text-center mt-4">{item.titel}</h5>
              </div>
              <div className="w-full md:w-10/12 mt-4">
                <div className="flex justify-between items-center">
                  <p className="text-sm p-1 bg-red-600 rounded text-white">
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
                  {convertToPersianNumber(formatPriceWithCommas(item.price))}{" "}
                  تومان
                </p>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
