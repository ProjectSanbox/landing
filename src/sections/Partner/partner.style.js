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
  }

  .partner-content {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: -52px;
    padding-right: -52px;
    .partner-item {
      padding: 33px 42px;
      img {
        width: 280px;
        &#p5{
          width: 200px;
        }
      }
    }
  }

  @media only screen and (max-width: 992px){
    .partner-content{
      .partner-item{
        padding: 33px 25px;
        img{
          width: 180px;
        }
      }
    }
  }

  @media only screen and (max-width: 768px){
    .partner-content{
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 576px){
    .partner-content{
      justify-content: center;
      flex-wrap: wrap;
      .partner-item{
        padding: 23px 25px;
      }
    }
  }
`;

export default PartnerWrapper;
