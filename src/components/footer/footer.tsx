import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import QuickAccessLinks from "./quichAccessLinks";
import QuickAccessMenu from "./quickAccessMenu";
const Footer = () => {
          return (
            <div className="bg-footerBg m-4 max-sm:mx-2 rounded-3xl">
              <div className="flex justify-between max-sm:justify-center border-b border-white items-center flex-wrap max-sm:px-1 max-sm:pt-1 max-sm:gap-4 px-10 p-20">
                <div className="sm:w-auto w-full ">
                  <button className="flex w-full px-7 cursor-pointer py-3 gap-4 bg-white rounded-md max-sm:rounded-3xl sm:justify-between justify-center items-center">
                    <div className="text-sm">بازگشت به بالا</div>
                    <FontAwesomeIcon icon={faChevronUp} className="mt-1" />
                  </button>
                </div>
                <div className="bg-white p-2 max-sm:p-1 rounded-md ">
                  <Link href="/" className="flex items-center justify-center">
                    <Image
                      className="ml-2  max-sm:w-1/4"
                      src="/static_technolife-brand.svg"
                      alt="Technolife Title"
                      width={34}
                      height={34}
                    />
                    <Image
                      className="max-sm:w-2/4 "
                      src="/static_technolife-title.svg"
                      alt="Technolife Title"
                      width={94}
                      height={40}
                    />
                  </Link>
                </div>
              </div>
              <div className="py-10 px-10 flex flex-wrap justify-between max-sm:justify-center">
                <div className="flex flex-col gap-8">
                  <div className="flex font-semibold text-white gap-2">
                    <div>تلفن : </div>
                    <div> 91077500 021 -</div>
                    <div> 47708000 - 021 </div>
                  </div>
                  <div className="flex font-semibold text-white gap-2">
                    <div>ایمیل : </div>
                    <div>info@technolife.ir </div>
                  </div>
                </div>
                <div className="bg-white p-3 rounded-xl flex max-sm:hidden flex-col items-start">
                  <div className="text-lg opacity-90 mb-4">
                    شبکه های اجتماعی
                  </div>
                  <div className="flex gap-7 mb-2">
                    <Image
                      className="cursor-pointer"
                      src="/footer/aparat.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/footer/instagram.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/footer/telegram.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/footer/youtube.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="py-10 px-10 max-sm:py-5 text-sm max-sm:px-0 ">
                <QuickAccessLinks />
                <QuickAccessMenu />
              </div>
              <div className="flex justify-center items-center sm:hidden w-full py-10">
                <div className="bg-white p-3 rounded-xl flex flex-col items-center w-9/12">
                  <div className="text-lg opacity-90 mb-4">
                    شبکه های اجتماعی
                  </div>
                  <div className="flex gap-8 mb-2">
                    <Image
                      className="cursor-pointer"
                      src="/footer/aparat.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/footer/instagram.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/footer/telegram.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                    <Image
                      className="cursor-pointer"
                      src="/footer/youtube.svg"
                      width={30}
                      alt="pic"
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-4 justify-end py-10 px-10 max-sm:py-5  max-sm:bg-blue-950 max-sm:justify-center rounded-t-3xl">
                <div className="bg-white p-2 rounded-xl cursor-pointer">
                  <Image
                    className="w-16 h-16 max-sm:w-10 max-sm:h-10"
                    src="/footer/c4.webp"
                    alt="pic"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="bg-white p-2 rounded-xl cursor-pointer">
                  <Image
                    className="w-16 h-16 max-sm:w-10 max-sm:h-10"
                    src="/footer/c5.webp"
                    alt="pic"
                    width={90}
                    height={90}
                  />
                </div>
                <div className="bg-white p-2 rounded-xl cursor-pointer">
                  <Image
                    className="w-16 h-16 max-sm:w-10 max-sm:h-10"
                    src="/footer/etmadelctronic.svg"
                    alt="pic"
                    width={90}
                    height={90}
                  />
                </div>
              </div>
              <div className="text-white py-10 px-10 max-sm:py-5 text-xs font-semibold max-sm:px-0 bg-blue-950 rounded-b-3xl flex justify-center items-center max-sm:flex-col gap-2">
                <div>1403-1391</div>
                <div>
                  تمامی حقوق مادی و معنوی این سایت متعلق به تکنولایف می‌باشد.
                </div>
              </div>
            </div>
          );
}
 
export default Footer;