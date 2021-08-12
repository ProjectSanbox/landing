import styled from 'styled-components';

const NavWrapper = styled.div`
    z-index: 9;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: #000;
    box-shadow: 0px 1px 2px rgba(255,255,255,.1);

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
            padding: 10px 10px;
            width: 280px;
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
                    
                }
            }

            .list-heading{
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 78px;
                img{
                    width: 60px;
                }
                .menu-icon{
                    display: flex;
                    align-items: center;
                    color: #ffffff;
                    margin: 10px 0px 45px 0px;
                    .list-heading-icon{
                        font-size: 20px;
                    }
               }

               .menu-close{
                margin: 10px 0px 40px 0px;
                   svg{
                       font-size: 25px;
                       color: #ffffff;
                       cursor: pointer;
                   }
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

    .nav{
        display: flex;
        justify-content: space-between;
        height: 80px;
        align-items: center;
        z-index: 7;
        img{
            width: 60px;
        }

        .navbar-menu{
            display: none;
            .navbar-menu-icon{
                width: 120px;
                cursor: pointer;
                color: #ffffff;
                font-size: 25px;
            }
        }

        ul{
            display: flex;
            li{
                a{
                    color: #777E90;
                    font-size: 14px;
                    line-height: 16px;
                    font-family: 'DM Sans', sans-serif;
                    font-weight: 700;
                    line-height: 79px;
                    &:hover{
                        color: #ffffff;
                    }
                }
            }

            li:not(:last-child){
                margin-right: 40px;
            }

            li:last-child{
                a{
                    padding: 10px 15px;
                    background: #ffffff;
                    color: #000000!important;
                    clip-path: polygon(8% 0, 100% 0%, 92% 100%, 0% 100%);
                    border-top-left-radius: 15px;
                    border-top-right-radius: 5px;
                    border-bottom-left-radius: 5px;
                    border-bottom-right-radius: 15px;
                }
            }

            li.active:not(:last-child){
                a{
                    border: 1px solid #fff;
                    padding: 10px;
                    border-radius: 5px;
                    color: #ffffff;
                }
            } 
        }
    }

    @media only screen and (max-width: 600px){
        .nav{
            height: 60px;
        }

        .hide{
            display: none!important;
        }

        .navbar-menu{
            display: inline-block!important;
            height: 25px;
            .navbar-menu-icon{
                width: 25px!important;
            }
        }

    }
`;

export default NavWrapper;