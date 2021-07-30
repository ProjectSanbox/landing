import styled from 'styled-components';

const BackedByWrapper  = styled.div`
    padding: 80px 0;

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
            font-size: 64px;
            line-height: 64px;
            color: #FCFCFD;
        }
    }

    .backedby-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .backedby-item{
            width: 336px;
            height: 147px;
            margin: 15px;
            border-radius: 16px;
            background: #17181C;
            position: relative;
            cursor: pointer;

            &:hover{
                background: #37415c;
            }

            img{
                width: 152px;
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