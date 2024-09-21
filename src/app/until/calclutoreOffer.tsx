const calculateDiscountedPrice = (price: number, discount: number) => {
  return price - (price * discount) / 100;
};


export default calculateDiscountedPrice