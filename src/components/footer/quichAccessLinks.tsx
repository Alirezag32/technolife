import Link from "next/link";

const QuickAccessLinks: React.FC = () => {
  return (
    <div className="flex justify-between text-white max-sm:hidden">
      <div>
        <h2 className="text-lg font-bold mb-6">دسترسی سریع</h2>
        <ul className="space-y-2 text-sm leading-6">
          <li>
            <Link href="/">بلاگ</Link>
          </li>
          <li>
            <Link href="/">خرید گوشی</Link>
          </li>
          <li>
            <Link href="/">گوشی سامسونگ</Link>
          </li>
          <li>
            <Link href="/">گوشی آیفون</Link>
          </li>
          <li>
            <Link href="/">گوشی شیائومی</Link>
          </li>
          <li>
            <Link href="/">گوشی پوکو</Link>
          </li>
          <li>
            <Link href="/">مقایسه گوشی‌</Link>
          </li>
          <li>
            <Link href="/">قیمت لپ تاپ</Link>
          </li>
          <li>
            <Link href="/">هندزفری بلوتوثی</Link>
          </li>
          <li>
            <Link href="/">لپ تاپ ایسوس</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-6">پرفروش ترین محصولات</h2>
        <ul className="space-y-2 text-sm leading-6">
          <li>
            <Link href="/">گوشی a14</Link>
          </li>
          <li>
            <Link href="/">آیفون 13</Link>
          </li>
          <li>
            <Link href="/">شیائومی ردمی نوت 12</Link>
          </li>
          <li>
            <Link href="/">پوکو x5 پرو</Link>
          </li>
          <li>
            <Link href="/">گوشی s24 ultra سامسونگ</Link>
          </li>
          <li>
            <Link href="/">شیائومی ردمی نوت 13</Link>
          </li>
          <li>
            <Link href="/">ساعت هوشمند</Link>
          </li>
          <li>
            <Link href="/">پرینتر</Link>
          </li>
          <li>
            <Link href="/">هارد اکسترنال</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-6">درباره ما</h2>
        <ul className="space-y-2 text-sm leading-6">
          <li>
            <Link href="/">تکنولایف در یک نگاه</Link>
          </li>
          <li>
            <Link href="/">اهداف و تعهدهای ما</Link>
          </li>
          <li>
            <Link href="/">سرگذشت تکنولایف</Link>
          </li>
          <li>
            <Link href="/">سوالات متداول</Link>
          </li>
          <li>
            <Link href="/">فروشگاه های حضوری</Link>
          </li>
          <li>
            <Link href="/">تماس با ما</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-6">پیش از خرید</h2>
        <ul className="space-y-2 text-sm leading-6">
          <li>
            <Link href="/">راهنمای خرید اقساطی</Link>
          </li>
          <li>
            <Link href="/">خرید سازمانی</Link>
          </li>
          <li>
            <Link href="/">راهنمای خرید از تکنولایف</Link>
          </li>
          <li>
            <Link href="/">روش های خرید از تکنولایف</Link>
          </li>
          <li>
            <Link href="/">ضمانت هفت‌روزه تکنولایف</Link>
          </li>
          <li>
            <Link href="/">شیوه‌ها و هزینه ارسال</Link>
          </li>
        </ul>
      </div>

      <div>
        <h2 className="text-lg font-bold mb-6">پس از خرید</h2>
        <ul className="space-y-2 text-sm leading-6">
          <li>
            <Link href="/">تضمین رجیستری</Link>
          </li>
          <li>
            <Link href="/">رویه‌های بازگرداندن کالا</Link>
          </li>
          <li>
            <Link href="/">سوالات متداول رجیستری</Link>
          </li>
          <li>
            <Link href="/">رهگیری سفارش‌ها</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default QuickAccessLinks;
