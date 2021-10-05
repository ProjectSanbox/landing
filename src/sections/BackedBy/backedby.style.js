import styled from "styled-components";

const BackedByWrapper = styled.div`
  padding: 80px 0px 70px 0px;

  .backedby-heading {
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

  .backedby-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-left: -52px;
    padding-right: -52px;
    .backedby-item {
      padding: 33px 52px;
    }
  }

  @media only screen and (max-width: 992px) {
    .backedby-content {
      justify-content: space-between;
      .backedby-item {
        width: 80%;
        margin-bottom: 30px;
        padding: unset;
      }
    }
  }

  @media only screen and (max-width: 576px) {
    .backedby-content {
      .backedby-item {
        width: 100px;
        margin: 5px auto;
        img#b1,
        img#b7 {
          width: 60%;
          margin: auto;
        }
      }
    }
  }
`;

export default BackedByWrapper;
