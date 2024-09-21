import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX ,faArrowLeft , faArrowDown , faShop} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";


interface SlidePropsShow {
  shop: boolean,
  login : boolean
}


const SidebarToggle: React.FC<SlidePropsShow> = ({shop , login} ) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  

  const handleClickOutside = (event: MouseEvent) => {
    if (
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="max-xl:block  hidden text-xl cursor-pointer "
        onClick={toggleSidebar}
      >
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white text-white transform transition-transform duration-300 z-30-important ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between m-4 items-center">
          <div onClick={toggleSidebar}>
            <FontAwesomeIcon className="text-black cursor-pointer" icon={faX} />
          </div>
          <div>
            <Image
              className="ml-2"
              src="/static_technolife-brand.svg"
              alt="Technolife Title"
              width={34}
              height={34}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 mx-4 overflow-y-auto scrollbar-hide max-h-full ">
          {shop && login && (
            <>
              <div className="text-black">سبد خرید</div>
              <div className="text-black">ورود و ثبت نام </div>
            </>
          )}
          <div className="text-blue-600 border-b  py-4 cursor-pointer flex  justify-between">
            <FontAwesomeIcon icon={faShop} />
            فروشنده شو <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="text-black border-b py-4  cursor-pointer flex  justify-between">
            خرید سازمانی <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            موبایل <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            لپ تاپ و تبلت <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            هدفون و هنذفری <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            ساعت و بند هوشمند <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            کامپیوتر و ماشین اداری <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            شبکه و ذخیره سازی گیمینگ <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            صوتی و تصویری <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            لوازم خانگی <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            ابزار آلات <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-black cursor-pointer flex text-sm justify-between">
            طلا و جواهرات <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div className="text-green-600 cursor-pointer flex text-sm justify-between py-8 border-t">
            <FontAwesomeIcon icon={faShop} />
            مجله آنلاین تکنو لایف <FontAwesomeIcon icon={faArrowDown} />
          </div>
          <div>cdcdcd</div>
        </div>
      </div>
    </>
  );
};

export default SidebarToggle;
