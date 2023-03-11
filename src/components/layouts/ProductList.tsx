import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

export default function ProductList({ children }: Props) {
  return <Layout>{children}</Layout>;
}

const Layout = styled.section`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
`;
