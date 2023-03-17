import { FilterOption, FilterOptionType } from "../@types/model/filter";
import { ProductItem } from "../@types/dto/product";
import { useMemo } from "react";

export const useFilteredProductList = (
  productList: ProductItem[],
  filter: FilterOption[]
) => {
  const selectedFilter = (value: FilterOptionType) => {
    return filter.some((filter) => filter.type === value);
  };

  return useMemo(() => {
    let filteredProductList: ProductItem[] = productList;

    !selectedFilter("isSoldOut")
      ? (filteredProductList = filteredProductList.filter(
          ({ isSoldOut }) => !isSoldOut
        ))
      : (filteredProductList = filteredProductList.filter((_) => true));

    if (selectedFilter("isExclusive")) {
      filteredProductList = filteredProductList.filter(
        ({ isExclusive }) => isExclusive
      );
    }
    if (selectedFilter("isSale")) {
      filteredProductList = filteredProductList.filter(({ isSale }) => isSale);
    }
    if (selectedFilter("searchKeyword")) {
      const keyword = filter.find((filter) => filter.type === "searchKeyword");
      if (keyword) {
        filteredProductList = filteredProductList.filter(
          (product) =>
            product.brandName.includes(keyword.label) ||
            product.goodsName.includes(keyword.label)
        );
      }
    }

    return filteredProductList;
  }, [filter, productList]);
};
