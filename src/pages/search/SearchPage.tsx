import Header from "../../components/layouts/Header";
import Filter from "./components/filter/Filter";
import ProductList from "../../components/layouts/ProductList";
import Product from "./components/product/Product";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import getProductList from "../../apis/productListApi";
import useFilter from "../../hooks/useFilter";
import { SALE } from "../../services/constants";
import LoadingBar from "../../components/loadingBar/LoadingBar";

export default function SearchPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);
  const { state, onDelete, onReset, onChange } = useFilter();
  const observerTargetRef = useRef<HTMLDivElement>(null);

  // TODO state에 있는게 뭔지를 파악해서 필터링 해야할듯
  const computedProductList: Product[] = useMemo(() => {
    if (state.includes(SALE) && !isLoading) {
      return productList.filter((product) => product.isSale === true);
    }
    return productList;
  }, [state, productList]);

  const intersectHandler = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      console.log("다봤다");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(intersectHandler, {
      threshold: 0.3,
    });
    if (observerTargetRef.current) {
      observer.observe(observerTargetRef.current);
    }
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    (async function () {
      const response = await getProductList();
      setProductList(response);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Header>
        <Filter
          filter={state}
          onChange={onChange}
          onDelete={onDelete}
          onReset={onReset}
          productList={computedProductList}
        />
      </Header>
      <ProductList>
        <ProductContainer>
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
          <Observer ref={observerTargetRef}><LoadingBar/></Observer>
        </ProductContainer>
      </ProductList>
    </>
  );
}

const Observer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 24px;
  background: transparent;
  text-align: center;


`;

const ProductContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${colors.white};
`;
