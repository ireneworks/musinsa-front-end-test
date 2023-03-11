import styled from "styled-components";
import { colors } from "../../../../../styles/colors";
import CloseIcon from "../../../../../components/assets/icons/Close.svg";

interface Props {
  label: string;
  onClick: (value?: any) => void;
}

export default function Tag({ label, onClick }: Props) {
  return (
    <TagContainer>
      <TagContent value={label} onClick={onClick}>
        {label}
      </TagContent>
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
  background: ${colors.blue};
`;

const TagContent = styled.button`
  display: flex;
  align-items: center;
  padding: 0 18px 0 0;
  background: transparent url(${CloseIcon}) top 2px right 0 / 14px no-repeat;
  border: none;
  color: ${colors.white};
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  cursor: pointer;
`;
