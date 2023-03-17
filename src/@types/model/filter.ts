export const filterOptions = [
  { label: "세일상품", type: "isSale" },
  { label: "단독상품", type: "isExclusive" },
  { label: "품절포함", type: "isSoldOut" },
] as const;

export type FilterOptionType =
  | "isSale"
  | "isExclusive"
  | "isSoldOut"
  | "searchKeyword";

export interface FilterOption {
  label: string;
  type: FilterOptionType;
}
