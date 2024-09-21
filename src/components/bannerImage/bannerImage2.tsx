import Image from "next/image";

const BannerImage2 = () => {
  return (
    <div className="flex  w-full ">
      <div className="w-full max-lg:w-full rounded-3xl">
        <Image
          className="w-full rounded-lg"
          src="/2bannerImage/1.webp"
          width="2000"
          height={190}
          alt="1bannerImage"
        />
      </div>
      
      
    </div>
  );
};

export default BannerImage2;
