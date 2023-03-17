import React from "react";
import styled from "styled-components";
import { THEME } from "../../styles/theme";
import logo from "../../assets/logo/logo_musinsa.png";

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <>
      <HeaderContainer>
        <Logo />
        {children}
      </HeaderContainer>
      <Divider />
    </>
  );
}

const HeaderContainer = styled.header`
  width: 100%;
`;

const Logo = styled.div`
  width: 100%;
  height: 50px;
  background: ${THEME.white} url(${logo}) center / auto 16px no-repeat;
`;

const Divider = styled.div`
  width: 100%;
  height: 10px;
  background: ${THEME.gray[3]};
`;
