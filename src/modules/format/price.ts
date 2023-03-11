export const formatPrice = (source: number) => {
  return source.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
