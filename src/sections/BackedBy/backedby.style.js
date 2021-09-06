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
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

    }

    @media only screen and (max-width: 550px){
        .backedby-content{
            justify-content: center;
            .backedby-item{
                width: 300px;
                margin-bottom: 40px;
                img{
                    width: 60%;
                    margin: auto;
                   &#b1{
                       width: 40%;
                   }
                }
            }
        }
        
    }
`;

export default BackedByWrapper;