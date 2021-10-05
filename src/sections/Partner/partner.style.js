import styled from "styled-components";

const PartnerWrapper = styled.div`
  padding: 80px 0px 100px 0px;

  .partner-heading {
    text-align: center;
    p {
      font-size: 16px;
      text-transform: uppercase;
      line-height: 16px;
      font-weight: 700;
      color: ${(props) => props.theme.primaryColor};
      font-weight: 700;
    }

    h1 {
      font-size: 48px;
      line-height: 48px;
    }
  }

  .partner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: -52px;
    padding-right: -52px;
    .partner-item {
      padding: 33px 52px;
      img {
        width: 280px;
      }
    }
  }
`;

export default PartnerWrapper;
