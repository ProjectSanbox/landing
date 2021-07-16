import styled from "styled-components";
import footerBg from "assets/images/footer-bg.png";

const MenuWrapper = styled.div`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(20, 20, 22, 0.35);
  padding: 0 160px;
  position:fixed;
  width: 100%;
  top: 0;

  img {
    width: 31px;
    height: 31px;
    margin-right: 10px;
  }

  .logo {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .menu {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    color: #777E90;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }

  .list {
    margin: 0 24px;
  }

  .list:hover {
    cursor: pointer;
  }
`;

export default MenuWrapper;
