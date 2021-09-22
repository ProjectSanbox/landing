import styled from 'styled-components';

const NavWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #000000;
   .header{
       display: flex;
       justify-content: space-between;
       align-items: center;
       .logo{
           width: 170px;
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
                    background: #ffffff;
                    border-radius: 8px;
                    position: relative;
                    box-sizing: border-box;
                    &::after{
                        content: "";
                        position: absolute;
                        top: -2px; right: -2px; bottom: -2px; left: -2px;
                        z-index: -1;
                        border-radius: inherit;
                        background: linear-gradient(93.87deg, #05D1B5 0%, #0776D8 100%);
                    }
                    a{
                        background: -webkit-linear-gradient(93.87deg, #05D1B5 0%, #0776D8 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        line-height: 40px;
                        width: 100%;
                        display: block;
                    }
                }
            }
           }
       }
   }
`;

export default NavWrapper;