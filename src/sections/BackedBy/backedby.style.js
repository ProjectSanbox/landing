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
      flex-wrap: wrap;;
      .backedby-item{
          width: 300px;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            margin: 30px;
            transition: 0.5s;
            position: relative;
            .box{
                position: absolute;
                top: 10px;
                left: 10px;
                right: 10px;
                bottom: 10px;
                background: #2a2b2f;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                transition: 0.5s;
                &:before{
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.03);
                }

                &:hover{
                    transform: translateY(-20px);
                }
            }
        img{
          width: 90%;
          &#b1{
                width: 38%;
            }
        }
      }
    }

    @media only screen and (max-width: 992px){
        .backedby-content{
            .backedby-item{
                width: 230px;
            }
        }
    }

    @media only screen and (max-width: 550px){
        .backedby-content{
            justify-content: center;
            .backedby-item{
                margin-bottom: 40px;
                img{
                    width: 60%;
                    margin: 15px auto;
                   &#b1{
                       width: 40%;
                   }
                }
            }
        }
        
    }
`;

export default BackedByWrapper;