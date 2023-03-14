import styled from "styled-components";
import { Theme } from "../../../styles/theme";
import logo from "../../../assets/logo/logo_musinsa.png";

export const Logo = styled.div`
  width: 100%;
  height: 50px;
  background: ${Theme.white} url(${logo}) center / auto 16px no-repeat;
`;
