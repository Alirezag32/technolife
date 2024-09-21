import Image from "next/image";

const BannerImage1 = () => {
          return (
            <div className="flex gap-3 flex-wrap w-full justify-around">
              <div className="w-[32%] max-lg:w-full cursor-pointer">
                <Image
                  className="w-full rounded-2xl"
                  src="/1bannerImage/1.webp"
                  width="600"
                  height={400}
                  alt="1bannerImage"
                />
              </div>
              <div className="w-[32%] max-lg:w-full cursor-pointer">
                <Image
                  className="w-full rounded-2xl"
                  src="/1bannerImage/2.webp"
                  width="600"
                  height={400}
                  alt="bannerImage2"
                />
              </div>
              <div className="w-[32%] max-lg:w-full cursor-pointer">
                <Image
                  className="w-full rounded-2xl"
                  src="/1bannerImage/3.webp"
                  width="600"
                  height={400}
                  alt="bannerImage3"
                />
              </div>
            </div>
          );
}
 
export default BannerImage1;