const convertToPersianNumber = (number: number | string): string => {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return number
    .toString()
    .replace(/\d/g, (digit) => persianDigits[parseInt(digit)]);
};

export default convertToPersianNumber