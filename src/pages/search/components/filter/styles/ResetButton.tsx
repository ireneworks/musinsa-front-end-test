import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
import RefreshIcon from "../../../../../components/assets/icons/Refresh.svg";

export const ResetButton = styled.button`
  flex-basis: 50px;
  min-width: 50px;
  height: 50px;
  padding: 0;
  border: none;
  background: ${colors.white} url(${RefreshIcon}) center / 22px no-repeat;
  cursor: pointer;
  z-index: 1;
`;
