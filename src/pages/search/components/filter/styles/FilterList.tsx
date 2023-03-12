import styled from "styled-components";

export const FilterList = styled.ul`
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
