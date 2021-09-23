import styled from 'styled-components';

const NavWrapper = styled.div`
    margin-top: 44px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
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
                    height: 40px;
                    text-align: center;
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