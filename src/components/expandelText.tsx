import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface TextProps {
  text: string;
}

const ExpandableText: React.FC<TextProps> = ({ text }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="relative">
        <div
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
            isExpanded ? "max-h-full" : "max-h-20"
          }`}
        >
          <p className="text-justify text-sm opacity-90 leading-10">{text}</p>
        </div>
      </div>
      <button
        className="mt-4 flex items-center text-blue-700 font-bold py-2 px-4 "
        onClick={toggleExpand}
      >
        {isExpanded ? (
          <>
            بستن
            <FontAwesomeIcon icon={faChevronUp} className="mr-2 mt-2" />
          </>
        ) : (
          <>
            نمایش بیشتر
            <FontAwesomeIcon icon={faChevronDown} className="mr-2" />
          </>
        )}
      </button>
    </>
  );
};

export default ExpandableText;
