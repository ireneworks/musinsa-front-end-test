import Chip from "./components/Chip";
import Tag from "./components/Tag";
import React, { useCallback, useState } from "react";
import { isEmpty } from "../../../../modules/typeGuard/typeGuard";
import * as S from "./styles";
import SearchBar from "./components/SearchBar";

type FilterCategory = "세일상품" | "단독상품" | "품절포함";
type Filter<T> = T | string;

export default function Filter() {
  const [isSearch, setIsSearch] = useState(false);
  const [selectedFilters, setSelectedFilter] = useState<
    Filter<FilterCategory>[]
  >([]);

  const onSearch = () => {
    setIsSearch(!isSearch);
  };

  const findFilter = (target: Filter<FilterCategory>): boolean => {
    return selectedFilters.includes(target);
  };

  const deleteFilter = useCallback(
    (target: Filter<FilterCategory>) => {
      const result = selectedFilters.filter((filter) => filter !== target);
      setSelectedFilter(result);
    },
    [selectedFilters]
  );

  const onSelectFilter = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    if (findFilter(currentTarget.value)) {
      deleteFilter(currentTarget.value);
      return;
    }
    setSelectedFilter([...selectedFilters, currentTarget.value]);
  };

  const onDeleteFilter = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    deleteFilter(currentTarget.value);
  };

  const onReset = () => {
    setSelectedFilter([]);
  };

  return (
    <S.FilterContainer>
      <S.FilterWrapper>
        <Chip label="검색" icon isActive={isSearch} onClick={onSearch} />
        <Chip
          label="세일상품"
          isActive={findFilter("세일상품")}
          onClick={onSelectFilter}
        />
        <Chip
          label="단독상품"
          isActive={findFilter("단독상품")}
          onClick={onSelectFilter}
        />
        <Chip
          label="품절포함"
          isActive={findFilter("품절포함")}
          onClick={onSelectFilter}
        />
      </S.FilterWrapper>
      {!isEmpty(selectedFilters) && (
        <S.SelectedFilters>
          <S.FilterList>
            {!isEmpty(selectedFilters) &&
              selectedFilters.map((filter, index) => (
                <Tag key={index} label={filter} onClick={onDeleteFilter} />
              ))}
          </S.FilterList>
          <S.ResetButton onClick={onReset} />
        </S.SelectedFilters>
      )}
      {isSearch && <SearchBar />}
    </S.FilterContainer>
  );
}
