"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faShoppingBasket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import SidebarToggle from "../sideBarNavbar";
const Navbar = () => {
  const [focusInput, setFocusInput] = useState(false);
  const scrollDirection = useScrollDirection();

  const onFocusHandler = () => {
    setFocusInput(true);
  };

  const onBlurHandler = () => {
    setFocusInput(false);
  };

  return (
    <nav
      className={`p-5 bg-white sticky top-0 transition-all duration-300 z-50 border-b-2 hidden md:block ${
        focusInput ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="grid" style={{ gridTemplateColumns: "60% 40%" }}>
        <div className="flex items-center gap-4">
          <div>
            <Link href="/" className="flex items-center">
              <Image
                className="ml-2"
                src="/static_technolife-brand.svg"
                alt="Technolife Title"
                width={34}
                height={34}
              />
              <Image
                className=""
                src="/static_technolife-title.svg"
                alt="Technolife Title"
                width={94}
                height={26}
              />
            </Link>
          </div>
          <div className="w-3/4 relative">
            <FontAwesomeIcon
              icon={faSearch}
              className="absolute w-8 right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
            <input
              onFocus={onFocusHandler}
              onBlur={onBlurHandler}
              className={`w-full py-4 pl-10 pr-14 rounded-xl outline-none placeholder:text-slate-500 transition-all duration-300 ${
                focusInput ? "bg-white shadow-lg" : "bg-gray-100"
              }`}
              placeholder="محصول موردنظرتان را جست و جو کنید"
              type="text"
            />
            {focusInput && (
              <div className="absolute left-0 right-0 top-full mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 z-20">
                <div className="border-b-customBorderNavigationColor border-b-2 text-gray-500 p-2 text-sm">
                  جست و جو برای ...
                </div>
                <div className="">
                  جست و جو های محبوب
                  <div className="flex flex-wrap gap-2 mt-2">
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      A55
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      سامسونگ
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      A15
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      A35
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      آیفون 13
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      S24
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      Note13
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      S23
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      لپ تاپ
                    </div>
                    <div className="text-xs text-gray-400 border-2 border-gray-200 rounded-2xl p-2 cursor-pointer">
                      ایرپاد
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end gap-6 items-center ">
          <Link
            className="flex gap-4 items-center border-customBorderNavigationColor border py-1 rounded-xl px-6"
            href="/"
          >
            <div className="border-l-2 pl-4 p-1 border-black">ورود</div>
            <div>ثبت نام</div>
          </Link>
          <div>
            <FontAwesomeIcon
              className="h-5 p-2 border-2 rounded-md cursor-pointer"
              icon={faShoppingBasket}
            />
          </div>
        </div>
      </div>
      <div
        className={` flex overflow-hidden items-center gap-4 transition-all duration-300 max-xl:hidden z-20 ${
          scrollDirection === "up"
            ? "animate-slideUp"
            : "animate-slideDown flex"
        }`}
      >
        <div className="flex gap-4 mt-4 border-l-2 pl-4">
          <div className="text-sm text-gray-800 cursor-pointer">موبایل</div>
          <div className="text-sm text-gray-800 cursor-pointer">
            لپ تاپ و تبلت
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">
            هدفون و هنذفری
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">
            ساعت و بند هوشمند
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">
            کامپیوتر و ماشین اداری
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">
            شبکه و ذخیره سازی
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">گیمینگ</div>
          <div className="text-sm text-gray-800 cursor-pointer">
            صوتی و تصویری
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">
            لوازم خانگی{" "}
          </div>
          <div className="text-sm text-gray-800 cursor-pointer">ابزارآلات</div>
          <div className="text-sm text-gray-800 cursor-pointer">
            طلا و جوهرات
          </div>
        </div>
        <div className="text-blue-600 mt-4 cursor-pointer">فروشنده شو</div>
      </div>
    </nav>
  );
};

export default Navbar;
