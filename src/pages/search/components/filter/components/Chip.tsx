import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
import SearchIcon from "../../../../../components/assets/icons/Search.svg";

interface Props {
  label: string;
  icon?: boolean;
  isActive: boolean;
  onClick: (value?: any) => void;
}
// TODO 고정 최소 넓이 주기
// TODO value -> name 으로 변경
export default function Chip({
  label,
  icon = false,
  isActive,
  onClick,
}: Props) {
  return (
    <ChipContainer
      isIcon={icon}
      isActive={isActive}
      onClick={onClick}
      value={label}
    >
      {label}
      {icon && <Icon />}
    </ChipContainer>
  );
}

const ChipContainer = styled.button<{ isIcon: boolean; isActive: boolean }>`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  gap: 3px;
  padding: 7px ${({ isIcon }) => (!isIcon ? "15px" : "11px")};
  border-radius: 18px;
  border: 1px solid ${colors.gray[1]};
  background: ${colors.white};
  color: ${({ isActive }) => (!isActive ? colors.black : colors.blue)};
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
