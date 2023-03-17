import React, { useState } from "react";
import Chip from "./Chip";
import SearchBar from "./SearchBar";
import styled from "styled-components";
import { THEME } from "../../../styles/theme";
import RefreshIcon from "../../../assets/icons/Refresh.svg";
import { FilterOption, filterOptions } from "../../../@types/model/filter";
import Tag from "./Tag";
import { ProductItem } from "../../../@types/dto/product";

interface Props {
  filter: FilterOption[];
  productList: ProductItem[];
  onChange: (payload: FilterOption) => void;
  onReset: () => void;
}

export default function Filter({
  productList,
  filter,
  onReset,
  onChange,
}: Props) {
  const [isSearchOpen, toggleSearch] = useState(false);

  return (
    <FilterContainer>
      <FilterWrapper>
        <Chip
          label="검색"
          isActive={
            isSearchOpen || filter.some(({ type }) => type === "searchKeyword")
          }
          icon
          onClick={() => toggleSearch(!isSearchOpen)}
        />
        {filterOptions.map(({ type, label }, index) => (
          <Chip
            key={index}
            label={label}
            isActive={filter.some((option) => option.type === type)}
            onClick={() => onChange({ type, label })}
          />
        ))}
      </FilterWrapper>
      {filter.length > 0 && (
        <SelectedFilters>
          <FilterList>
            {filter.length > 0 &&
              filter.map((option, index) => (
                <Tag
                  key={index}
                  label={option.label}
                  onClick={() =>
                    onChange(
                      option.type !== "searchKeyword"
                        ? option
                        : { type: option.type, label: "" }
                    )
                  }
                />
              ))}
          </FilterList>
          <ResetButton onClick={onReset} />
        </SelectedFilters>
      )}
      {isSearchOpen && (
        <SearchBar
          productList={productList}
          onExecute={(label: string) =>
            onChange({ label, type: "searchKeyword" })
          }
        />
      )}
    </FilterContainer>
  );
}

const FilterContainer = styled.div`
  width: 100%;
  height: auto;
  background: ${THEME.white};
`;

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;
  height: 55px;
  padding: 10px 7px;
  box-sizing: border-box;
  background: ${THEME.white};
`;

const SelectedFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 12px 0 12px 15px;
  box-sizing: border-box;
  background: ${THEME.white};
`;

const FilterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5px;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
  list-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ResetButton = styled.button`
  flex-basis: 50px;
  min-width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: ${THEME.white} url(${RefreshIcon}) center / 22px no-repeat;
  cursor: pointer;
  z-index: 1;
`;
