import Image from "next/image";

const BannerImage4 = () => {
  return (
    <div className="flex gap-3 flex-wrap w-full justify-around">
      <div className="w-[45%] max-lg:w-full cursor-pointer">
        <Image
          className="w-full rounded-2xl"
          src="/4bannerImage/1.webp"
          width="800"
          height={500}
          alt="1bannerImage"
        />
      </div>
      <div className="w-[45%] max-lg:w-full cursor-pointer">
        <Image
          className="w-full rounded-2xl"
          src="/4bannerImage/2.webp"
          width="800"
          height={500}
          alt="bannerImage2"
        />
      </div>
    </div>
  );
};

export default BannerImage4;
