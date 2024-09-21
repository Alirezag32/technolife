import Image from "next/image";

const imageAndText = [
  { src: "/ImageAndTextUp/1.webp", text: "بخاری برقی" },
  { src: "/ImageAndTextUp/2.webp", text: "جارو برقی" },
  { src: "/ImageAndTextUp/3.webp", text: "آبمیوه گیری" },
  { src: "/ImageAndTextUp/4.webp", text: "کولر گازی" },
  { src: "/ImageAndTextUp/5.webp", text: "چای ساز" },
  { src: "/ImageAndTextUp/6.webp", text: "اتو" },
  { src: "/ImageAndTextUp/7.webp", text: "پلوپز" },
  { src: "/ImageAndTextUp/8.webp", text: "مایکروویو" },
  { src: "/ImageAndTextUp/9.webp", text: "یخچال" },
  { src: "/ImageAndTextUp/10.webp", text: "قهوه ساز" },
  { src: "/ImageAndTextUp/11.webp", text: "چرخ گوشت" },
  { src: "/ImageAndTextUp/12.webp", text: "ماشین ظرفشویی" },
  { src: "/ImageAndTextUp/13.webp", text: "سشوار" },
  { src: "/ImageAndTextUp/14.webp", text: "ماشین لباسشویی" },
];

const ImageAndTextUp = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 p-4 gap-14 max-sm:gap-8">
      {imageAndText.map((item, index) => (
        <div
          key={index}
          className="relative group overflow-hidden rounded-lg cursor-pointer  border border-gray-200 "
        >
          <Image
            src={item.src}
            alt={item.text}
            layout="responsive"
            width={2000}
            height={2000}
            className="w-full h-full object-cover bg-gray-200"
          />

          <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gray-950 text-white flex items-center justify-center  opacity-0 group-hover:opacity-100 group-hover:h-1/4 transition-all duration-100 ease-in-out transform translate-y-full group-hover:translate-y-0 text-sm max-sm:text-xs">
            {item.text}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageAndTextUp;
