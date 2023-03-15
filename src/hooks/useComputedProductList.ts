import { FilterOption, FilterOptionValue } from "../@types/model/filter";
import { useMemo } from "react";
import { ProductItem } from "../@types/dto/product";

export const useComputedProductList = (
  productList: ProductItem[],
  filter: FilterOption[]
) => {
  const selectedFilter = (value: FilterOptionValue) => {
    return filter.some((filter) => filter.type === value);
  };

  return useMemo(() => {
    let filteredProductList: ProductItem[] = productList;

    if (!selectedFilter("isSoldOut")) {
      filteredProductList = productList.filter(({ isSoldOut }) => !isSoldOut);
    }
    if (selectedFilter("isExclusive")) {
      filteredProductList = productList.filter(
        ({ isExclusive, isSoldOut }) => isExclusive && !isSoldOut
      );
    }
    if (selectedFilter("isSale")) {
      filteredProductList = productList.filter(
        ({ isSale, isSoldOut }) => isSale && !isSoldOut
      );
    }
    if (selectedFilter("searchKeyword")) {
      const keyword = filter.find((e) => e.type === "searchKeyword");
      if (keyword) {
        filteredProductList = productList.filter(
          (product) =>
            product.brandName.includes(keyword.label) ||
            product.goodsName.includes(keyword.label)
        );
      }
    }
    return filteredProductList;
  }, [filter, productList]);
};
