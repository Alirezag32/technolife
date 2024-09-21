"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRightToBracket,
  faSearch,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import SidebarToggle from "../sideBarNavbar";

const MdNavbar = () => {
  const [focusInput, setFocusInput] = useState(false);

  const onFocusHandler = () => {
    setFocusInput(true);
  };

  const onBlurHandler = () => {
    setFocusInput(false);
  };
  return (
    <nav
      className={`p-4 relative bg-white transition-all duration-300 z-20 border-b-2 hidden max-md:block ${
        focusInput ? "backdrop-blur-md" : ""
      }`}
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-2">
          <SidebarToggle shop={true} login={true} />

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
          <div className="flex items-center gap-3 text-gray-800 cursor-pointer">
            <div className="mb-1">ورود</div>
            <div>
              <FontAwesomeIcon icon={faArrowRightToBracket} />
            </div>
          </div>
        </div>
        <div className="flex items-center  justify-between">
          <div className="w-10/12 relative">
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
              placeholder="جست و جو ..."
              type="text"
            />
            {focusInput && (
              <div className="absolute left-0 right-0 top-full mt-2 p-4 bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col gap-2 z-20">
                <div className="border-b-customBorderNavigationColor border-b text-gray-500 p-2 text-sm">
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
          <div className="w-2/12 flex  justify-end">
            <FontAwesomeIcon
              className="h-6 text-gray-700 cursor-pointer"
              icon={faCartShopping}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MdNavbar;

