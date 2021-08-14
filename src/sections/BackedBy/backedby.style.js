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
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 100px;
        .item-border{
            width: 544px;
            height: 263px;
            margin-left: 30px;
            position: relative;
            border-radius: 16px;
            padding: 20px;
            background: linear-gradient(230.22deg, rgba(64, 159, 245, 0.3) -35.96%, rgba(66, 185, 255, 0.3) 54.54%, rgba(14, 30, 173, 0.3) 116.3%);
            .backedby-item{
                height: 100%;
                background: #ffffff;
                cursor: pointer;
                border-radius: 10px;

                img{
                    width: 55%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
            }
        }
    }

    @media only screen and (max-width: 500px){
        .item-border{
            width: 300px!important;
            height: 140px!important;
            padding: 10px!important;
            border-radius: 10px;
            margin: 10px auto!important;
            .backedby-item{
                border-radius: 10px;
            }
            
            img{
                width: 135px!important;
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