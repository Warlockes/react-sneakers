export const getTax = (totalPrice: number) => {
  return (totalPrice * 0.05).toFixed(2);
};
