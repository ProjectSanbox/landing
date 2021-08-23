import styled from 'styled-components';

const MemeWrapper = styled.div`
padding: 80px 0px;
    .meme_heading{
        text-align: center;
    }

    h1{
        font-size: 48px;
    }

    p{
        margin: 30px 0px;
    }

    form{
        border-radius: 16px;
        padding: 40px 150px;
        margin-top: 40px;
        a{
            color: #42B9FF;
            display: inline-block;
        }
        .form-group{
            margin-bottom: 30px;
            label{
                color: #ffffff;
            }

            input{
                border-radius: 40px;
                padding-left: 20px;
                background: transparent;
                border: 1px solid #808080;
                color: #ffffff;
            }

            span{
                color: #9C2932;
            }
        }

        .form-heading{
            font-size: 24px;
            text-transform: uppercase;
            font-family: 'Goma Block', sans-serif;
        }

        button{
            background: #42B9FF;
            color: #ffffff;
            border-radius: 40px;
        }
    }

    @media only screen and (max-width: 991px){
        form{
            padding: 40px 50px;
        }
    }

    @media only screen and (max-width: 600px){
        form{
            padding: 40px 0px;
        }
    }

    @media only screen and (max-width: 435px){
        form{
            padding: 40px 0px;

            a{
                max-width: 300px;
            }
        }
    }
`;

export default MemeWrapper;