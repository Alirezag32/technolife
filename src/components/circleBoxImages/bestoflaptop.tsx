import Image from "next/image";

const BestOfLaptops = () => {
  return (
    <div className="">
      <h2 className="text-3xl font-semibold text-gray-800 text-center max-md:text-lg mb-6">
        برترین های لپ تاپ
      </h2>
      <div className="flex flex-wrap justify-center align-middle gap-4">
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/thebestoflaptop/1.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">ایسوس</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/thebestoflaptop/2.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">اچ پی</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/thebestoflaptop/3.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">مک بوک</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/thebestoflaptop/4.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">لنوو</div>
        </div>
        <div className="flex flex-col gap-1 items-center justify-center cursor-pointer">
          <Image
            className="md:w-[200px] md:h-[200px] w-[80px] h-[80px] cursor-pointer "
            src="/thebestoflaptop/5.webp"
            width={160}
            height={160}
            alt="pic"
          />
          <div className="text-gray-600 text-base">ایسر</div>
        </div>
      </div>
    </div>
  );
};

export default BestOfLaptops;
