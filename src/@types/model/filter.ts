export const filterOptions = [
  { label: "세일상품", value: "isSale" },
  { label: "단독상품", value: "isExclusive" },
  { label: "품절포함", value: "isSoldOut" },
] as const;

export type FilterOptionValue = "isSale" | "isExclusive" | "isSoldOut";

export interface FilterOption {
  value: FilterOptionValue;
  label: string;
}
