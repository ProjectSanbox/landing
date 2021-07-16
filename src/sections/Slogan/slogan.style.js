import styled from 'styled-components';

const SloganWrapper = styled.div`
    padding: 50px 0px 125px 0px;
    width: 100%;
    .slogan{
        text-align: center;
        img{
            width: 200px;
            margin: auto;
        }

        p{
            margin: 20px auto 0px;
            font-family: 'Poppins', sans-serif;
            font-weight: 300;
            font-size: 20px;
            color: #777E90;
            width: 75%;
            padding: 0px 15px;
        }
    }

    @media only screen and (max-width: 600px){
        padding: 80px 0px 105px 0px;
    }

    @media only screen and (max-width: 480px){
        .slogan{
            img{
                width: 150px;
            }

            p{
                font-size: 16px;
            }
        }
    }
`;

export default SloganWrapper;