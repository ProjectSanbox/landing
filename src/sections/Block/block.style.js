import styled from 'styled-components';

const BlockWrapper = styled.div`
    padding: 80px 0;
    position: relative;
    p{
        color: #ffffff;
        font-family: 'Poppins', sans-serif;
    }

    .block-content{
        z-index: 2;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        .block-content-heading{
            font-size: 45px;
            font-weight: 900;
            margin-bottom: 40px;
        }

        div[data-aos="fade-down"]{
            transform: translateY(-30%);
            &.aos-animate{
                transform: translateY(0);
            }
        }

        button[data-aos="fade-up"]{
            color: #ffffff;
            background: ${props => props.theme.primaryColor};
            height: 40px;
            border-radius: 40px;
            transform: translateY(30%);
            &.aos-animate{
                transform: translateY(0);
            }
            &:hover{
                color: ${props => props.theme.primaryColor};
                border: 1px solid ${props => props.theme.primaryColor};
                background: transparent;
            }
        }
    }

    @media only screen and (max-width: 767px){
        .block-content{
            position: relative;
            margin-top: 50px;
        }
    }
`;

export default BlockWrapper;