type FilterCategory = "세일상품" | "단독상품" | "품절포함";
type Filter<T> = T | string;

// TODO 고민
type FilterMenu = "keyword" | "isSale" | "isExclusive" | "isSoldOut";
type Filters = {
  [key in FilterMenu]: boolean;
};
