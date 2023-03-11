import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
import SearchIcon from "../../../../../components/assets/icons/Search.svg";

interface Props {
  data?: string[];
}

export default function SearchBar({ data }: Props) {
  const [value, setValue] = useState("");

  return (
    <SearchBarContainer>
      <Input
        placeholder="상품명 검색"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <AutoComplete>
        <ul>
          <li>
            <p>
              ML5에서 새로 나온 속성(attribute)으로 input 요소나 textarea 요소에
              안내문을 넣을 수 있습니다. 기본 모양은 회색의 글자로, 배경색이
              하얀색 또는 밝은 색이면 보기에 괜찮
            </p>
          </li>
          <li>
            <p>sfds</p>
          </li>
        </ul>
      </AutoComplete>
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
  background: ${colors.white};
  border: 1px solid ${colors.gray[4]};
  border-top: none;
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
