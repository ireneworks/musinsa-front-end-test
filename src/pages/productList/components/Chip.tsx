import styled from "styled-components";
import { THEME } from "../../../styles/theme";
import SearchIcon from "../../../assets/icons/Search.svg";
import React from "react";

interface Props {
  label: string;
  icon?: boolean;
  isActive: boolean;
  onClick: () => void;
}

export default function Chip({
  label,
  icon = false,
  isActive,
  onClick,
}: Props) {
  return (
    <ChipButton isIcon={icon} isActive={isActive} onClick={onClick}>
      {label}
      {icon && <Icon />}
    </ChipButton>
  );
}

const ChipButton = styled.button<{ isIcon: boolean; isActive: boolean }>`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 7px ${({ isIcon }) => (!isIcon ? "15px" : "11px")};
  border-radius: 18px;
  border: 1px solid ${THEME.gray[1]};
  background: ${THEME.white};
  color: ${({ isActive }) => (!isActive ? THEME.black : THEME.blue)};
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  cursor: pointer;
`;

const Icon = styled.div`
  width: 18px;
  height: 18px;
  background: transparent url(${SearchIcon}) center / 100% no-repeat;
`;
