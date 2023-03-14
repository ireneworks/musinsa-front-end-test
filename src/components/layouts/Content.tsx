import styled from "styled-components";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export default function Content({ children }: Props) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.section`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
