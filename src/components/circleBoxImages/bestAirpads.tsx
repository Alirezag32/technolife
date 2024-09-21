import Image from "next/image";

const BeastAirpads = () => {
  return (
    <div className="c">
      <h2 className="text-3xl font-semibold text-gray-800 text-center max-md:text-lg mb-6">
       بهترین های ایرپاد
      </h2>
      <div className="flex flex-wrap justify-center align-middle gap-4">
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/1.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">کیوسی وای</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/2.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">هایلو</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/3.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">شیائومی</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/4.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">اپل</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/5.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">سامسونگ</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/6.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">هوآوی</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/bestAirpads/7.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">آنکر</div>
        </div>
      </div>
    </div>
  );
};

export default BeastAirpads;
