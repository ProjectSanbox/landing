import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 80px 0px 10px 0px;
  background: #17181c;
  h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 400;
  }

  p {
    color: #777e90;
  }

  a {
    font-weight: 400;
  }

  .footer-heading-content {
    text-align: center;
    margin-bottom: 40px;
    img {
      width: 300px;
      margin: auto;
    }
  }

  .footer-list {
    .footer-title {
      font-size: 16px;
      color: ${(props) => props.theme.primaryColor};
      text-transform: uppercase;
      font-weight: 700;
    }

    .comnunity {
      display: flex;
      justify-content: space-between;
    }

    ul {
      margin-bottom: 40px;
      li {
        font-size: 14px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 18px;
        a {
          transition: 0.3s;
          &:hover {
            padding-left: 5px;
            color: ${(props) => props.theme.primaryColor};
          }
        }
      }
    }

    ul.footer-link {
      li {
        text-transform: capitalize;
        img {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
        a {
          display: flex;
          align-items: center;
          display: block;
          display: flex;
          svg {
            margin-right: 10px;
          }
        }
      }
    }
  }

  .priceExchange {
    display: flex;
    justify-content: center;
    p {
      font-size: 17px;
      color: #ffffff;
    }
    .price {
      margin-right: 40px;
      p {
        margin: 0;
        padding: 0;
      }

      p.percent {
        color: red;
      }

      p.price-headinng {
        margin-bottom: 10px;
        color: ${(props) => props.theme.primaryColor};
        font-size: 15px;
        font-weight: 700;
      }
    }

    .available {
      p.available-heading {
        font-size: 15px;
        font-weight: 700;
        color: ${(props) => props.theme.primaryColor};
      }
      div {
        a {
          display: flex;
          align-items: center;
          padding: 5px 0px;
          p {
            margin: 0;
          }
          img {
            margin-right: 10px;
            width: 30px;
          }
        }
      }
    }
  }

  .copyright {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }

  @media only screen and (max-width: 992px) {
    .hide {
      display: none;
    }

    .copyright {
      display: block;
      text-align: center;
    }

    .footer-list {
      text-align: center;
      .comnunity {
        justify-content: center;
        ul {
          &:not(:last-child) {
            margin-right: 40px;
          }
        }
      }
    }
  }
`;

export default FooterWrapper;
