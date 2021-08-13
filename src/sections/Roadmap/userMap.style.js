import styled from "styled-components";


const UserMapWrapper = styled.div`
  padding: 130px 0;

  .roadmap-heading{
    width: 100%;
    text-align: center;
    h1{
      font-size: 48px;
      line-height: 48px;
    }
  }

  @media only screen and (max-width: 576px){
    padding: 60px 0;
  }
`;

export default UserMapWrapper;
