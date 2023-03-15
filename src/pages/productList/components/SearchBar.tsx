import React, { useEffect, useMemo, useState } from "react";
import { isEmpty } from "../../../modules/typeGuard/typeGuard";
import styled from "styled-components";
import { Theme } from "../../../styles/theme";
import SearchIcon from "../../../assets/icons/Search.svg";
import {ProductItem} from "../../../@types/dto/product";

interface Props {
  searchQuery: string;
  productList: ProductItem[];
  onChange: (payload: any) => void;
}

export default function SearchBar({
  productList,
  onChange,
  searchQuery,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const productNameList = useMemo(() => {
    return productList.map(({ goodsName }) => goodsName);
  }, [productList]);

  const matchedProducts = useMemo(() => {
    return productNameList.filter((productName) =>
      productName.toUpperCase().includes(searchQuery.toUpperCase())
    );
  }, [searchQuery, productNameList]);

  const onClick = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    setIsOpen(false);
    onChange("searchQuery");
  };

  const onSubmit = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (!isEmpty(matchedProducts) && searchQuery !== "") {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }, [matchedProducts]);

  return (
    <SearchBarContainer>
      <Input
        placeholder="상품명 검색"
        value={searchQuery}
        onChange={({ currentTarget }) => onChange("searchQuery")}
        onKeyPress={onSubmit}
        onBlur={() => setIsOpen(!isOpen)}
      />
      {isOpen && (
        <AutoComplete>
          <ul>
            {!isEmpty(matchedProducts) &&
              matchedProducts.map((productName, index) => (
                <li key={index}>
                  <button onClick={onClick} value={productName}>
                    {productName}
                  </button>
                </li>
              ))}
          </ul>
        </AutoComplete>
      )}
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`
  width: 100%;
  padding: 20px 15px;
  background: ${Theme.gray[2]};
  box-sizing: border-box;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 8px 10px 8px 36px;
  border: 1px solid ${Theme.gray[4]};
  box-sizing: border-box;
  background: ${Theme.white} url(${SearchIcon}) top 6px left 10px /22px no-repeat;
  color: ${Theme.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: ${Theme.gray[5]};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const AutoComplete = styled.div`
  position: absolute;
  left: 15px;
  right: 15px;
  max-height: 160px;
  background: ${Theme.white};
  border: 1px solid ${Theme.gray[4]};
  border-top: none;
  overflow-x: hidden;
  z-index: 2;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: block;
      contain: content;
      cursor: pointer;

      &:hover {
        background: ${Theme.gray[3]};
      }

      button {
        width: 100%;
        margin: 0;
        padding: 8px 12px;
        border: none;
        background: none;
        text-align: left;
        color: ${Theme.black};
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
      }
    }
  }
`;
