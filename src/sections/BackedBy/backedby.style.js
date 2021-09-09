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
      justify-content: center;
      flex-wrap: wrap;;
      .backedby-item{
          width: 220px;
          height: 117.33px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            margin: 10px;
            transition: 0.5s;
            position: relative;
            background: linear-gradient(rgb(168, 17, 6) -0.29%, rgb(192, 31, 25) 33.61%, rgb(248, 65, 69) 99.08%);
            .box{
                position: absolute;
                top: 7px;
                left: 7px;
                right: 7px;
                bottom: 7px;
                border-radius: 15px;
                display: flex;
                justify-content: center;
                align-items: center;
                overflow: hidden;
                transition: 0.5s;
                background: #ffffff;
                &:hover{
                    transform: translateY(-5px);
                }
            }
        img{
          width: 48%;
          &#b7{
           background: #000000;
           padding: 5px;
          }
          &#b9{
            background: #000000;
            padding: 5px;
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
                       width: 60%;
                   }
                }
            }
        }
        
    }
`;

export default BackedByWrapper;