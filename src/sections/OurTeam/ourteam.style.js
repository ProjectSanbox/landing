import styled from 'styled-components';
import background from 'assets/images/backgroundourteam.svg';

const OurTeamWrapper = styled.div`
    padding: 100px 0px;
    border-bottom: 1px dashed #353945;
    position: relative;

    .ourteam-background{
        width: 100%;
        height: 976.54px;
        background: url(${background});
        position: absolute;
        bottom: 45%;
        right: 20%;
    }

    h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    p{
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        color: #777E90;
    }

    .ourteam-heading{
        text-align: center;
        h1{
            font-size: 64px;
            line-height: 64px;
        }
    }

    .text-upper{
        text-transform: uppercase;
    }

    .ourteam-content{
        display: flex;
        flex-wrap: wrap;
        .ourteam-item{
            background: #17181C;
            border-radius: 16px;
            padding: 25px 35px;
            margin-bottom: 20px;
            height: 415px;
            overflow: hidden;
            .ourteam-item-heading{
                text-align: center;
                p{
                    margin: 0;
                    font-size: 14px;
                    line-height: 24px;
                    color: #FCFCFD;     
                }

                p.text-job{
                    color: #ACA7ED;
                    padding-bottom: 20px;
                    border-bottom: 1px solid #353945;
                }

                img{
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    margin: auto;
                    margin-bottom: 20px;
                }
            }
            
            .ourteam-item-desc{
                font-size: 14px;
                line-height: 24px;
                color: #ACA7ED;
                padding-top: 20px;
            }
        }   
    }

    @media only screen and (max-width: 1000px){
        .ourteam-item{
            padding: 20px 35px!important;
        }
    }

    @media only screen and (max-width: 992px){
        .ourteam-item{
            .ourteam-item-desc{
               p{
                max-height: 200px;
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 7;
               }
            }
        }
    }

    @media only screen and (max-width: 480px){
        .ourteam-item{
            min-height: 375px;
        }
        padding: 0px 0px;
        .ourteam-heading{
        h1{
            font-size: 49px;
            line-height: 49px;
        }
    }
  }

`;

export default OurTeamWrapper;
