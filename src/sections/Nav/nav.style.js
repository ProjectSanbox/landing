import styled from 'styled-components';

const NavWrapper = styled.div`
    margin-top: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;

    /* Nav-mobie */
    .nav-mobile{
        .overlay{
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,.7);
            z-index: 99;
            display: none;
        }
        .list-mobile{
            padding-top: 40px;
            text-align: center;
            width: 100%;
            position: fixed;
            left: 0;
            top: 0;
            bottom: 0;
            background: #17181C;
            z-index: 9999;
            box-shadow: 2px 2px 2px rgba(0,0,0,.7);
            transform: translate(-100%);
            transition: transform linear .2s;
            li{
                padding: 20px 0px;
                a{
                    font-size: 50px;
                    font-weight: 700;
                }
            }

            .menu-close{
                position: absolute;
                top: 20px;
                right: 20px;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                box-shadow: rgba(255,215,0,0.5) 0px 0px 0px 3px;
                padding: 0;
                svg{
                    font-size: 25px;
                    color: #ffffff;
                    cursor: pointer;
                }
            }

        }
    }
    .nav-mobile.open{
        .overlay{
            display: block;
        }
        .list-mobile{
            transform: translate(0);
        }
    }

    /* nav-PC */

   .header{
       display: flex;
       justify-content: space-between;
       align-items: center;
       .logo{
           width: 170px;
       }

       .toggle{
           display: none;
           button{
               width: 50px;
               height: 50px;
               border-radius: 50%;
               display: flex;
               justify-content: center;
               align-items: center;
               box-shadow: rgba(255,215,0,0.5) 0px 0px 0px 3px;
               svg{
                   font-size: 20px;
               }
           }
       }

       .nav{
           ul{
            display: flex;
            align-items: center;
            li{
                padding: 0;
                margin: 0;
                &:not(:last-child){
                    margin-right: 48px;
                }

                &:last-child{
                    width: 130px;
                    height: 33x;
                    text-align: center;
                    font-weight: 500;
                    background: #000000;
                    position: relative;
                    box-sizing: border-box;
                    border: 2px solid ${props => props.theme.primaryColor};
                    a{
                        line-height: 40px;
                        width: 100%;
                        color: ${props => props.theme.primaryColor};
                        display: block;
                    }
                }
            }
           }
       }
   }

   @media only screen and (max-width: 1200px){
       .hide{
           display: none;
       }

       .header{
           .toggle{
               display: block;
           }
       }
   }
`;

export default NavWrapper;