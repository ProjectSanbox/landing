import styled from "styled-components";

const ContractWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  width: 100%;
  z-index: 99;
  .contract {
    width: 100%;
    background: #ffffff;
    text-align: center;
    border-radius: 5px;
    padding: 10px 0px;
    position: relative;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px,
      rgba(6, 24, 44, 0.65) 0px 4px 6px -1px,
      rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    p {
      padding: 0px;
      margin: 0;
      font-size: 15px;
      color: black;
    }
    a {
      color: ${(props) => props.theme.primaryColor};
    }

    button {
      position: absolute;
      width: unset;
      background: none;
      height: unset;
      right: 0px;
      top: 0px;
      svg {
        font-size: 20px;
        color: #990000;
      }
    }
  }
`;

export default ContractWrapper;
