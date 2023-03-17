import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";
import SearchIcon from "../../../assets/icons/Search.svg";
import { ProductItem } from "../../../@types/dto/product";
import HighlightText from "./HighligtText";

interface Props {
  productList: ProductItem[];
  onExecute(search: string): void;
}

export default function SearchBar({ productList, onExecute }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const productNameList = useMemo(() => {
    return productList.map(({ goodsName }) => goodsName);
  }, [productList]);

  const matchedProducts = useMemo(() => {
    return productNameList.filter((productName) =>
      productName.toUpperCase().includes(searchKeyword.toUpperCase())
    );
  }, [productNameList, searchKeyword]);

  const onClick = (search: string) => {
    onExecute(search);
    setIsOpen(false);
    inputRef.current?.blur();
    setSearchKeyword("");
  };

  const onKeyPressHandler = ({
    key,
  }: React.KeyboardEvent<HTMLInputElement>) => {
    if (key === "Enter") {
      setIsOpen(false);
      onExecute(searchKeyword);
      setSearchKeyword("");
    }
  };

  useEffect(() => {
    if (matchedProducts.length > 0 && searchKeyword !== "") {
      setIsOpen(true);
      return;
    }
    setIsOpen(false);
  }, [matchedProducts]);

  return (
    <SearchBarContainer>
      <Input
        ref={inputRef}
        placeholder="상품명 검색"
        value={searchKeyword}
        onChange={({ currentTarget }) => setSearchKeyword(currentTarget.value)}
        onKeyPress={onKeyPressHandler}
      />
      {isOpen && (
        <AutoComplete>
          <ul>
            {matchedProducts.length > 0 &&
              matchedProducts.map((productName, index) => (
                <li key={index}>
                  <button onClick={() => onClick(productName)}>
                    <HighlightText
                      keyword={searchKeyword}
                      source={productName}
                    />
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
  background: ${THEME.gray[2]};
  box-sizing: border-box;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 8px 10px 8px 36px;
  border: 1px solid ${THEME.gray[4]};
  box-sizing: border-box;
  background: ${THEME.white} url(${SearchIcon}) top 6px left 10px /22px no-repeat;
  color: ${THEME.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: ${THEME.gray[5]};
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
  background: ${THEME.white};
  border: 1px solid ${THEME.gray[4]};
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
        background: ${THEME.gray[3]};
      }

      button {
        width: 100%;
        margin: 0;
        padding: 8px 12px;
        border: none;
        background: none;
        text-align: left;
        color: ${THEME.black};
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
