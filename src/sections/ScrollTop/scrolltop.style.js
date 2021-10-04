import styled from "styled-components";

const ScrollTopWrapper = styled.div`
  position: fixed;
  right: 20px;
  top: 90%;
  transform: translateY(-90%);
  z-index: 9999;
  button {
    background: ${(props) => props.theme.primaryColor};
    width: 60px;
    height: 60px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 30px;
      color: #000000;
    }
  }
`;

export default ScrollTopWrapper;
