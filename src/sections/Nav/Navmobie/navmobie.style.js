import styled from "styled-components";

const NavMobieWrapper = styled.div`
  .navmobie {
    position: fixed;
    background: #ffffff;
    height: 65vh;
    bottom: 20px;
    right: 10%;
    left: 10%;
    z-index: 99;
    border-radius: 30px;
    padding: 20px;
    .nav-heading {
      display: flex;
      justify-content: space-between;
      align-items: center-;
      img {
        width: 100px;
      }

      button {
        width: 30px;
        height: 30px;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          font-size: 25px;
          color: #000000;
        }
      }
    }

    .nav-list {
      width: 100%;
      margin-top: 30px;
      margin-left: 20px;
      li {
        margin-bottom: 10px;
        a {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          height: 100%;
          color: black;
          display: block;
          font-weight: 700;
          svg {
            margin-right: 20px;
            font-size: 18px;
          }
        }
      }
    }
  }
`;

export default NavMobieWrapper;
