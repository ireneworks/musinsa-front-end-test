import * as S from "./styles";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Header({ children }: Props) {
  return (
    <>
      <S.Header>
        <S.Logo />
        {children}
      </S.Header>
      <S.Divider />
    </>
  );
}
