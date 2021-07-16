import styled from 'styled-components';

const NavBannerWrapper = styled.div`
        height: 60px;
        background: linear-gradient(to right, #0bab64, #3bb78f, #166d3b, #20bf55, #63d471);
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 8;
        margin-top: 80px;
    
    input{
        opacity: 0;
        position: absolute;
        z-index: -2;
    }

    p{
        margin: 0;
        padding: 0;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 13px;
    }

    button{
        width: unset;
    }

    .navbanner-box{
        display: flex;
        justify-content: center;
        align-items: center;

        .copy-link{
            svg{
                font-size: 20px;
                color: #fff;
            }

           .copied{
               color: ${props => props.theme.primaryColor};
           }
        }

        .navbanner-close{
            position: absolute;
            right: 10px;
        }

        a{
            &:hover{
                color: ${props => props.theme.primaryColor};
            }
        }

        .tooltip {
        position: relative;
        display: inline-block;
            .copy-link{
                &:hover .tooltiptext{
                    visibility: visible;
                }
                .tooltiptext{
                position: absolute;
                top: -20px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 11px;
                width: 100px;
                background: ${props => props.theme.primaryColor};
                padding: 5px;
                visibility: hidden;
                color: #ffffff;
                z-index: 9999;

                &::after{
                    content: "";
                    position: absolute;
                    top: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0; 
                    height: 0; 
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                    border-top: 5px solid ${props => props.theme.primaryColor};
                    }
                }
            } 
        }

        .navbanner-close{
            color: #ffffff;
            &:hover{
                color: ${props => props.theme.primaryColor}
            }
        }
    }

    @media only screen and (max-width: 700px){
        .navbanner-content{
            .navbar-link{   
                display: block;
            }
        }
    }

    @media only screen and (max-width: 600px){
        margin-top: 60px!important;
    }

    @media only screen and (max-width: 500px){
        .navbanner-content{
            font-size: 11px;
        }
    }

    @media only screen and (max-width: 376px){
        .navbanner-close{
            position: absolute!important;
            right: 0!important;
        }

        .navbanner-content{
            margin-right: 70px;
            .navbar-link{
                max-width: 150px;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        
    }

    @media only screen and (max-width: 321px){

        .navbanner-content{
            margin-right: 15px;
        }
        
    }
`;

export default NavBannerWrapper;