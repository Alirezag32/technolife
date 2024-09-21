const formatPriceWithCommas = (price: number): string => {
  return price.toLocaleString("fa-IR");
};

export default formatPriceWithCommas;
