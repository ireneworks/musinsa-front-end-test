import styled from "styled-components";
import LoaderIcon from "../../../assets/icons/ccommon_loading_spinner.svg";

export default function LoadingBar() {
  return <Loader />;
}

const Loader = styled.div`
  width: 16px;
  height: 16px;
  margin: auto;
  background: transparent url(${LoaderIcon}) center / 100% no-repeat;
  animation: spinner 2s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
