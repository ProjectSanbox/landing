import styled from 'styled-components';

const BackedByWrapper  = styled.div`
    padding: 160px 0;
    background: linear-gradient(181.29deg, #409FF5 7.66%, #42B2FD 50.07%, #0E1EAD 105.25%);
    h1{
        font-family: 'DM Sans', sans-serif;
        font-weight: 700;
    }

    P{
        font-family: 'Poppins', sans-serif;
    }

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
            color: #FCFCFD;
        }
    }

    .backedby-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 100px;
        .backedby-item{
            width: 544px;
            height: 263px;
            margin: 15px;
            border-radius: 16px;
            background: #ffffff;
            position: relative;
            cursor: pointer;
            border: 10px solid #42B9FF;

            img{
                width: 55%;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }
        }
    }

    @media only screen and (max-width: 500px){
        .backedby-item{
            width: 255px!important;
            height: 140px!important;
            margin: 5px!important;

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