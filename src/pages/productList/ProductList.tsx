import React, { useMemo } from "react";
import useFilter from "../../hooks/useFilter";
import Header from "../../components/layouts/Header";
import Filter from "./components/Filter";
import Content from "../../components/layouts/Content";
import Product from "./components/Product";
import styled from "styled-components";
import { Theme } from "../../styles/theme";
import EmptyIcon from "../../assets/icons/icon-general-empty.svg";
import { isEmpty } from "../../modules/typeGuard/typeGuard";
import LoadingBar from "./components/LoadingBar";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

export default function ProductList() {
  const { state: filter, onReset, onChange } = useFilter();
  const { isLoading, productList, hasMoreItem, observerRef } =
    useInfiniteScroll();

  const computedProductList = useMemo(() => {
    let filteredProductList: Product[] = productList;
    if (filter.some((filter) => filter.value === "isSoldOut")) {
      filteredProductList = productList.filter((_) => true);
    }
    // if (filter.isExclusive) {
    //   filteredProductList = productList.filter(
    //     (product) => product.isExclusive
    //   );
    // }
    // if (filter.isSale) {
    //   filteredProductList = productList.filter((product) => product.isSale);
    // }
    // if (filter.searchQuery) {
    //   filteredProductList = productList.filter(
    //     (product) =>
    //       product.goodsName.includes(filter.searchQuery) ||
    //       product.brandName.includes(filter.searchQuery)
    //   );
    // }
    return filteredProductList;
  }, [filter, productList]);

  return (
    <>
      <Header>
        <Filter
          filter={filter}
          onChange={onChange}
          onReset={onReset}
          productList={computedProductList}
        />
      </Header>
      <Content>
        {!isLoading && isEmpty(computedProductList) && (
          <EmptyPage>
            <p>검색 결과 없음</p>
          </EmptyPage>
        )}
        <ProductListWrapper>
          {!isLoading &&
            computedProductList.map((product, index) => (
              <Product
                key={index}
                brandName={product.brandName}
                imageUrl={product.imageUrl}
                goodsName={product.goodsName}
                price={product.price}
                normalPrice={product.normalPrice}
                saleRate={product.saleRate}
                isExclusive={product.isExclusive}
                isSale={product.isSale}
                linkUrl={product.linkUrl}
                isSoldOut={product.isSoldOut}
                brandLinkUrl={product.brandLinkUrl}
              />
            ))}
        </ProductListWrapper>
        {hasMoreItem && (
          <Observer ref={observerRef}>
            <LoadingBar />
          </Observer>
        )}
      </Content>
    </>
  );
}

const ProductListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin: 0 0 20px 0;
  padding: 0;
  background: ${Theme.white};
`;

const EmptyPage = styled.div`
  width: 100%;
  height: 57px;
  margin-top: 210px;
  padding-top: 85px;
  background: transparent url(${EmptyIcon}) center 0 / 69px no-repeat;

  p {
    margin: 0;
    text-align: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: ${Theme.gray[5]};
  }
`;

const Observer = styled.div`
  width: 100%;
  height: 30px;
  margin-bottom: 16px;
  background: transparent;
  text-align: center;
`;
