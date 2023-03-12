import Chip from "./components/Chip";
import Tag from "./components/Tag";
import React, { useState } from "react";
import { isEmpty } from "../../../../modules/typeGuard/typeGuard";
import * as S from "./styles";
import SearchBar from "./components/SearchBar";
import { EXCLUSIVE, SALE, SOLD_OUT } from "../../../../services/constants";

interface Props {
  filter: Filter<FilterCategory>[];
  productList: Product[];
  onChange: (value: React.MouseEvent<HTMLButtonElement>) => void;
  onDelete: (value: React.MouseEvent<HTMLButtonElement>) => void;
  onReset: () => void;
}

export default function Filter({
  productList,
  filter,
  onDelete,
  onReset,
  onChange,
}: Props) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const onClickSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };
  const findFilter = (target: FilterCategory): boolean => {
    return filter.includes(target);
  };

  return (
    <S.FilterContainer>
      <S.FilterWrapper>
        <Chip
          label="검색"
          icon
          isActive={isSearchOpen}
          onClick={onClickSearch}
        />
        <Chip label={SALE} isActive={findFilter(SALE)} onClick={onChange} />
        <Chip
          label={EXCLUSIVE}
          isActive={findFilter(EXCLUSIVE)}
          onClick={onChange}
        />
        <Chip
          label={SOLD_OUT}
          isActive={findFilter(SOLD_OUT)}
          onClick={onChange}
        />
      </S.FilterWrapper>
      {!isEmpty(filter) && (
        <S.SelectedFilters>
          <S.FilterList>
            {!isEmpty(filter) &&
              filter.map((filter, index) => (
                <Tag key={index} label={filter} onClick={onDelete} />
              ))}
          </S.FilterList>
          <S.ResetButton onClick={onReset} />
        </S.SelectedFilters>
      )}
      {isSearchOpen && <SearchBar productList={productList} />}
    </S.FilterContainer>
  );
}
