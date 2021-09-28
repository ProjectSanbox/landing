import styled from 'styled-components';

const MediaWrapper = styled.div`
    padding:  0px 0px 80px 0px;
    .media-heading{
        text-align: center;
    }

    .media-content{
        display: flex;
        justify-content: center;
        margin-top: 80px;
        .meida-items{
            width: 200px;
            height: 90px;
            display: flex;
            justify-content: center;
            padding: 20px;
            align-items: center;
            position: relative;
            &:not(:last-child){
                margin-right: 60px;
            }
            &:nth-child(4){
                img{
                    width: 80%;
                }
            }
            &:before{
                content: "";
                width: 20%;
                height: 100%;
                border-top: 1px solid ${props => props.theme.primaryColor};
                border-bottom: 1px solid ${props => props.theme.primaryColor};
                border-left: 1px solid ${props => props.theme.primaryColor};
                position: absolute;
                left: 0;
            }

            &:after{
                content: "";
                width: 20%;
                height: 100%;
                border-top: 1px solid ${props => props.theme.primaryColor};
                border-bottom: 1px solid ${props => props.theme.primaryColor};
                border-right: 1px solid ${props => props.theme.primaryColor};
                position: absolute;
                right: 0;
            }

        }
    }

    @media only screen and (max-width: 576px){
        .media-content{
           flex-direction: column;
           align-items: center;
           justify-content: center;
           margin-top: 50px;
            .meida-items{
                width: 80%;
                margin-right: unset;
                margin-bottom: 40px;
            }
        }
    }
`;

export default MediaWrapper;