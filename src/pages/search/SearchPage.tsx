import Header from "../../components/layouts/Header";
import Filter from "./components/filter/Filter";
import ProductList from "../../components/layouts/ProductList";
import Product from "./components/product/Product";
import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

export default function SearchPage() {
  return (
    <>
      <Header>
        <Filter />
      </Header>
      <ProductList>
        <ProductContainer>
          <Product
            imageUrl="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg"
            brandName="에프씨엠엠 에프씨엠엠 에프씨엠엠 에프씨엠엠 에프씨엠엠"
            goodsName="[패키지] 헤이즈 오버핏 스웨트셔츠 [쭈리/기모] 2PACK"
            saleRate={20}
            price={59000}
            normalPrice={80000}
          />
          <Product
            imageUrl="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg"
            brandName="에프씨엠엠"
            goodsName="[패키지] 헤이즈 오버핏 스웨트셔츠 [쭈리/기모] 2PACK KJMT2369 / KJMT2400"
            saleRate={20}
            price={59000}
            normalPrice={80000}
          />
          <Product
            imageUrl="https://image.msscdn.net/images/goods_img/20210122/1759350/1759350_2_500.jpg"
            brandName="에프씨엠엠"
            goodsName="[패키지] 헤이즈 오버핏 스웨트셔츠 [쭈리/기모] 2PACK KJMT2369 / KJMT2400"
            saleRate={20}
            price={59000}
            normalPrice={80000}
          />
        </ProductContainer>
      </ProductList>
    </>
  );
}

const ProductContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${colors.white};
`;
