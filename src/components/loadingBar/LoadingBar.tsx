import styled from "styled-components"
import { colors } from "../../styles/colors"

export default function LoadingBar() {
    return <Loader/>
}

const Loader = styled.div`
    margin: auto;
    border: 3px solid transparent;
    border-radius: 50%;
    background-image: linear-gradient(#fff, #fff),
    linear-gradient(to left, ${colors.white} 0%,  ${colors.black} 100%);
    background-origin: border-box;
    background-clip: content-box, border-box;
    width: 16px;
    height: 16px;
    animation: spinner 2s linear infinite;
  @keyframes spinner {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`