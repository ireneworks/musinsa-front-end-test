import styled from "styled-components";

export const ProductContainer = styled.li`
  flex: 0 1 50%;
  width: 50%;
  display: block;
  contain: content;
  height: auto;

  @media screen and (min-width: 760px) {
    flex: 0 1 33.3%;
    width: 33.3%;
  }
`;
