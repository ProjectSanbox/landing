import styled from "styled-components";

const NavWrapper = styled.div`
  margin-top: 44px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99;

  /* Nav-mobie */
  .nav-mobile {
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      z-index: 99;
      display: none;
    }
    .list-mobile {
      padding-top: 40px;
      text-align: center;
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      background: #17181c;
      z-index: 9999;
      box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.7);
      transform: translate(-100%);
      transition: transform linear 0.2s;
      li {
        padding: 15px 0px;
        &.pitching {
          a {
            padding: 0px 15px 8px 15px;
            border: 1px solid ${(props) => props.theme.primaryColor};
            color: ${(props) => props.theme.primaryColor};
          }
        }
        a {
          font-size: 35px;
          font-weight: 700;
        }

        svg.dropdown{
         position: absolute;
         font-size: 30px;
         top: 2%;
         left: 57%;
        }

        .listChildMobie{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #17181c;
          z-index: 99;
          transform: translateX(-100%);
          transition: 0.5s;
          &.show{
            transform: translateX(0);
          }
          li{
            .listChildestMobie{
              display: none;
              &.show{
                display: block;
              }
              li{
                display: flex;
                align-items: center;
                justify-content: center;
                img{
                  width: 80px;
                }
              }
            }
          }
        }
      }

      .menu-close {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 50px;
        background: transparent;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(255, 215, 0, 0.5) 0px 0px 0px 3px;
        padding: 0;
        svg {
          font-size: 25px;
          color: #ffffff;
          cursor: pointer;
        }
      }
    }
  }
  .nav-mobile.open {
    .overlay {
      display: block;
    }
    .list-mobile {
      transform: translate(0);
    }
  }

  /* nav-PC */

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      width: 170px;
    }

    .toggle {
      display: none;
      button {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: rgba(255, 215, 0, 0.5) 0px 0px 0px 3px;
        svg {
          font-size: 20px;
        }
      }
    }

    .nav {
      ul {
        display: flex;
        align-items: center;
        li {
          padding: 0;
          margin: 0;
          transition: 1s;
          border: 2px solid transparent;
          cursor: pointer;
          box-sizing: border-box;
          position: relative;
          display: flex;
          align-items: center;

          &:before{
            content: "";
            display: block;
            width: 200px;
            height: 26px;
            position: absolute;
            left: 0;
            top: 30px;
          }

          svg {
            font-size: 20px;
            margin-top: 5px;
            position: absolute;
            right: -20px;
          }

          .listChild {
            flex-direction: column;
            opacity: 0;
            left: 0;
            bottom: -127px;
            position: absolute;
            width: 200px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            background: #17181C;
            li {
              width: 100%;
              margin: 0;
              padding: 10px 0px;
              position: relative;
              a {
                width: 100%;
                display: block;
              }

              svg {
                right: 30px;
                font-size: 16px;
              }

              &:before{
                content: "";
                display: none;
              }

              &:hover{
                border: none;
                .listChildest{
                  opacity: 1;
                }
              }

              .listChildest {
                flex-direction: column;
                background: #17181C;
                position: absolute;
                width: 200px;
                top: -2px;
                left: 198px;
                opacity: 0;
                transition: 1s;
                li {
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  &:before{
                    content: "";
                    display: none;
                  }
                  img {
                    width: 50px;
                    margin-right: 20px;
                    margin-left: 10px;
                  }
                }
              }
            }
          }

          &.active {
            border: 2px solid ${(props) => props.theme.primaryColor};
          }

          &:hover {
            border: 2px solid ${(props) => props.theme.primaryColor};
            box-shadow: 0 0 0 20px rgba(255, 255, 255, 0);
            animation: pulse 1s;

            @keyframes pulse {
              0% {
                box-shadow: 0 0 0 0 ${(props) => props.theme.primaryColor};
              }
            }

            .listChild{
              opacity: 1;
            }
          }
          &:last-child {
            margin-left: 24px;
          }
          &:not(:last-child) {
            padding: 0px 20px;
            margin-left: 10px;
          }

          &.pitching {
            width: 130px;
            height: 33x;
            text-align: center;
            font-weight: 500;
            background: #000000;
            position: relative;
            box-sizing: border-box;
            border: 2px solid ${(props) => props.theme.primaryColor};
            a {
              line-height: 40px;
              width: 100%;
              color: ${(props) => props.theme.primaryColor};
              display: block;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1200px) {
    .hide {
      display: none;
    }

    .header {
      .toggle {
        display: block;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .hide {
      display: none;
    }

    .nav-mobile {
      .list-mobile {
        padding-top: 15px;
        li {
          padding: 20px 0px;
        }
      }
    }

    .header {
      .toggle {
        display: block;
      }
    }
  }
`;

export default NavWrapper;
