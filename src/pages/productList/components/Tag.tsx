import styled from "styled-components";
import { THEME } from "../../../styles/theme";
import CloseIcon from "../../../assets/icons/Close.svg";
import React from "react";

interface Props {
  label: string;
  onClick: () => void;
}

export default function Tag({ label, onClick }: Props) {
  return (
    <TagContainer>
      <TagButton onClick={onClick}>{label}</TagButton>
    </TagContainer>
  );
}

const TagContainer = styled.li`
  flex: 1 0 auto;
  display: block;
  height: 26px;
  padding: 4px 8px 4px 10px;
  border-radius: 4px;
  box-sizing: border-box;
  background: ${THEME.blue};
`;

const TagButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0 18px 0 0;
  background: transparent url(${CloseIcon}) top 2px right 0 / 14px no-repeat;
  border: none;
  color: ${THEME.white};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
`;
