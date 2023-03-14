export const formatPrice = (source: number) => {
  return source.toString().replace(/(?=(\d{3})+(?!\d))/g, ",");
};
