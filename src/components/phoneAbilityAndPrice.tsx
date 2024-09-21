import classNames from "classnames";

interface PriceAndAbilityOptionProps {
  backgroundColor: string;
  price: string | number;
  ring?: string;
}

const PriceOption: React.FC<PriceAndAbilityOptionProps> = ({
  backgroundColor,
  price,
}) => (
  <div
    className={`p-4 max-lg:text-xs ${backgroundColor} text-center rounded-2xl h-20 max-md:max-h-10 max-md:rounded-md gap-1 flex items-center justify-center w-full hover:ring-2 ring-1 ring-blue-300 cursor-pointer hover:ring-blue-300`}
  >
    تا <span className="font-bold">{price}</span>
  </div>
);

const AbilityOption: React.FC<PriceAndAbilityOptionProps> = ({
  backgroundColor,
  price,
  ring,
}) => (
  <div
    className={classNames(
      "p-4 max-lg:text-xs text-lg transform duration-100  text-center rounded-2xl h-20 max-md:max-h-10 max-md:rounded-md gap-1 flex items-center justify-center w-full cursor-pointer",
      backgroundColor,
      "hover:ring-2 ring-1",
      ring
    )}
  >
    {price}
  </div>
);
const PhoneAbilityAndPrice = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-between p-8 max-md:p-0">
      <div className="flex flex-col p-6 max-md:p-3 w-full md:w-[48%]  ring-1 ring-gray-200 rounded-2xl">
        <div className="text-xl max-md:text-sm font-semibold pb-3 ">
          گوشی بر اساس قیمت
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <PriceOption backgroundColor="bg-indigo-50" price="5 میلیون" />
            <PriceOption backgroundColor="bg-indigo-100" price="15 میلیون" />
            <PriceOption backgroundColor="bg-indigo-200" price="50 میلیون" />
          </div>
          <div className="flex gap-2">
            <PriceOption backgroundColor="bg-indigo-50" price="75 میلیون" />
            <PriceOption backgroundColor="bg-indigo-100" price="30 میلیون" />
            <PriceOption backgroundColor="bg-indigo-200" price="100 میلیون" />
          </div>
        </div>
      </div>
      <div className="flex flex-col p-6  w-full md:w-[48%] ring-1 ring-gray-200 rounded-2xl">
        <div className="text-xl max-md:text-sm font-semibold pb-3">
          گوشی بر اساس ویژگی
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <AbilityOption
              backgroundColor="bg-red-50"
              price="گیمینگ"
              ring="ring-red-600"
            />
            <AbilityOption
              backgroundColor=" bg-yellow-50"
              price="دوربین"
              ring=" ring-yellow-200"
            />
            <AbilityOption
              backgroundColor="bg-orange-50"
              ring="ring-orange-300"
              price="50 میلیون"
            />
          </div>
          <div className="flex gap-2">
            <AbilityOption
              backgroundColor="bg-blue-50"
              ring="ring-blue-300"
              price="باتری"
            />
            <AbilityOption
              backgroundColor=" bg-indigo-100"
              ring="ring-indigo-400"
              price="ضد آب"
            />
            <AbilityOption
              backgroundColor="bg-amber-50"
              ring="ring-amber-300"
              price="شارژر سریع"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneAbilityAndPrice;
