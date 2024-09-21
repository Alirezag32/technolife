"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface AccordionSectionProps {
  title: string;
  links: { href: string; label: string }[];
}

const AccordionSection: React.FC<AccordionSectionProps> = ({
  title,
  links,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mb-4 text-white">
      <button
        onClick={toggleSection}
        className="w-full mb-6 flex justify-between items-center text-right font-bold "
      >
        <span>{title}</span>
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} />
      </button>

      {isOpen && (
        <ul className="mt-2 border-r-2 border-gray-500 pr-4">
          {links.map((link) => (
            <li key={link.href} className="mb-2 text-xs">
              <Link
                href={link.href}
                className="block text-right"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const AccordionMenu: React.FC = () => {
  return (
    <div className="p-4 hidden max-sm:block">
      <AccordionSection
        title="دسترسی سریع"
        links={[
          { href: "/", label: "بلاگ" },
          { href: "/", label: "خرید گوشی" },
          { href: "/", label: "گوشی سامسونگ" },
          { href: "/", label: "گوشی آیفون" },
          { href: "/", label: "گوشی شیائومی" },
          { href: "/", label: "مقایسه گوشی‌" },
        ]}
      />
      <AccordionSection
        title="پرفروش ترین محصول ها"
        links={[
          { href: "/", label: "گوشی a14" },
          { href: "/", label: "آیفون 13" },
          { href: "/", label: "شیائومی ردمی نوت 12" },
          { href: "/", label: "پوکو x5 پرو" },
          { href: "/", label: "گوشی s24 ultra سامسونگ" },
        ]}
      />
      <AccordionSection
        title="درباره ما"
        links={[
          { href: "/", label: "تکنولایف در یک نگاه" },
          { href: "/", label: "اهداف و تعهدهای ما" },
          { href: "/", label: "سرگذشت تکنولایف" },
          { href: "/", label: "سوالات متداول" },
        ]}
      />
      <AccordionSection
        title="پیش از خرید"
        links={[
          { href: "/", label: "راهنمای خرید اقساطی" },
          { href: "/", label: "خرید سازمانی" },
          { href: "/", label: "راهنمای خرید از تکنولایف" },
          { href: "/", label: "روش های خرید از تکنولایف" },
        ]}
      />
      <AccordionSection
        title="پس از خرید"
        links={[
          { href: "/", label: "تضمین رجیستری" },
          { href: "/", label: "رویه‌های بازگرداندن کالا" },
          { href: "/", label: "سوالات متداول رجیستری" },
          { href: "/", label: "رهگیری سفارش‌ها" },
        ]}
      />
    </div>
  );
};

export default AccordionMenu;
