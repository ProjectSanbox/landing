import styled from 'styled-components';

const AuditsWrapper = styled.div`
padding: 80px 0px 70px 0px;

.audit-heading {
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

.audit-content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-left: -52px;
  padding-right: -52px;
  .audit-item {
    padding: 33px 52px;
    margin-top: 55px;
    img{
        width: 30%;
        margin: auto;
    }
  }
}

@media only screen and (max-width: 1200px){
    .audit-content{
        .audit-item{
            img{
                width: 50%;
            }
        }
    }
}

@media only screen and (max-width: 768px){
    .audit-content{
        .audit-item{
            img{
                width: 70%;
            }
        }
    }
}

@media only screen and (max-width: 576px){
    .audit-content{
        .audit-item{
            img{
                width: 100%;
            }
        }
    }
}

`;

export default AuditsWrapper;