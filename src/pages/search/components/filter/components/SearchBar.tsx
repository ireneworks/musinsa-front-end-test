import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
import SearchIcon from "../../../../../components/assets/icons/Search.svg";
import { isEmpty } from "../../../../../modules/typeGuard/typeGuard";

interface Props {
  productList: Product[];
  onSubmit?: () => void;
}

export default function SearchBar({ productList, onSubmit }: Props) {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(false);
  };

  const productNameList = useMemo(() => {
    return productList.map((product) => product.goodsName);
  }, [productList]);

  const matchProducts = useMemo(() => {
    const result = productNameList.filter((productName) =>
      productName.includes(value)
    );
    setIsOpen(true);
    return result;
  }, [value, productNameList]);

  return (
    <SearchBarContainer>
      <Input
        placeholder="상품명 검색"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      {!isEmpty(matchProducts) && isOpen && (
        <AutoComplete>
          <ul>
            {!isEmpty(matchProducts) &&
              matchProducts.map((productName, index) => (
                <li key={index} onClick={onClick}>
                  <p>{productName}</p>
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
  background: ${colors.gray[2]};
  box-sizing: border-box;
`;

const Input = styled.input`
  position: relative;
  width: 100%;
  height: 40px;
  padding: 8px 10px 8px 36px;
  border: 1px solid ${colors.gray[4]};
  box-sizing: border-box;
  background: ${colors.white} url(${SearchIcon}) top 6px left 10px /22px no-repeat;
  color: ${colors.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

  &::placeholder {
    color: ${colors.gray[5]};
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;

const AutoComplete = styled.div`
  position: absolute;
  left: 15px;
  right: 15px;
  height: 160px;
  background: ${colors.white};
  border: 1px solid ${colors.gray[4]};
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
      padding: 8px 12px;
      cursor: pointer;

      &:hover {
        background: ${colors.gray[3]};
      }

      p {
        margin: 0;
        color: ${colors.black};
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
