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
        a{
            display: block;
            width: 220px;
            margin: 10px;
            height: 117.33px;
            .item-border{
                width: 100%;
                height: 100%;
                position: relative;
                border-radius: 16px;
                padding: 7px;
                overflow: hidden;
                background: linear-gradient(230.22deg, rgba(64, 159, 245, 0.3) -35.96%, rgba(66, 185, 255, 0.3) 54.54%, rgba(14, 30, 173, 0.3) 116.3%);
                .backedby-item{
                    height: 100%;
                    background: #ffffff;
                    cursor: pointer;
                    border-radius: 10px;

                    img{
                        width: 44%;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
            }
        }
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