import Image from "next/image";

const BeastMobiles = () => {
          return ( 
                    <div className="c">
                              <h2 className="text-3xl font-semibold text-gray-800 text-center max-md:text-lg mb-6">
                                        بهترین های موبایل
                              </h2>
                              <div className="flex flex-wrap justify-center align-middle gap-4">
                                        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Image className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer " src="/beastMobiles/1.webp" width={160} height={160} alt="pic" /><div className="text-gray-600 text-base">سامسونگ</div></div>
                                        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Image className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer " src="/beastMobiles/2.webp" width={160} height={160} alt="pic" /><div className="text-gray-600 text-base">شیائومی</div></div>
                                        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Image className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer " src="/beastMobiles/3.webp" width={160} height={160} alt="pic" /><div className="text-gray-600 text-base">اپل</div></div>
                                        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Image className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer " src="/beastMobiles/4.webp" width={160} height={160} alt="pic" /><div className="text-gray-600 text-base">نوکیا</div></div>
                                        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer"><Image className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer " src="/beastMobiles/5.webp" width={160} height={160} alt="pic" /><div className="text-gray-600 text-base">هانور</div></div>
                              </div>
                    </div>
           );
}
 
export default BeastMobiles;