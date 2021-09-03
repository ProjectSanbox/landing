import styled from 'styled-components';

const BackedByWrapper  = styled.div`
    padding: 80px  0px 140px 0px;

    .backedby-heading{
        text-align: center;
        p{
            font-size: 16px;
            text-transform: uppercase;
            line-height: 16px;
            font-weight: 700;
            color: ${props => props.theme.primaryColor};
            font-weight: 700;
        }

        h1{
            font-size: 48px;
            line-height: 48px;
        }
    }

    .backedby-content{
      
    }

    @media only screen and (max-width: 500px){
        .backedby-content{
            height: auto;
            a{
                width: 305px;
                height: 162.66px;
                .item-border{
                    border-radius: 10px;
                    .backedby-item{
                        border-radius: 10px;
                    }
                    
                    img{
                        width: 135px!important;
                    }
                }
            }
        }
        
    }

    @media only screen and (max-width: 480px){
        .backedby-heading{
        h1{
            font-size: 49px;
            line-height: 49px;
        }
    }
  }
`;

export default BackedByWrapper;