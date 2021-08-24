import styled from 'styled-components';
import background from 'assets/images/meme/background.jpg';

const blue_color = "#00bcdd";
const pink_color = "#ff00ff";
const slate_color = "rgb(16,24,50)";


const MemeWrapper = styled.div`
    margin-top: 250px;
    padding: 0px 0px 80px 0px;
    width: 100%;
    position: relative;
    .meme_heading{
        text-align: center;
    }

    h1{
        font-size: 48px;
    }

    .meme-group{
        display: flex;
        align-items: center;
        flex-direction: column;

        .meme-img{
            position: absolute;
            bottom: 87%;
            display: flex;
            align-items: center;
           img{
               width: 300px;
           }
        }

        .meme-content{
        width: 100%;
        height: 300px;
        color: hsl(50, 50%, 50%);
        display: flex;
        overflow: hidden;
        align-items: center;
        justify-content: center;
        position: relative;
        flex-direction: column;
        .meme-text{
            position: relative;
            z-index: 2;
            font-size: 48px;
            font-weight: bold;
            letter-spacing: 15px;
            text-transform: uppercase;
            text-shadow: 1px 1px hsl(50, 50%, 45%),
                        2px 2px hsl(50, 50%, 40%),
                        3px 3px hsl(50, 50%, 35%),
                        4px 4px hsl(50, 50%, 34%),
                        5px 5px hsl(50, 50%, 33%),
                        6px 6px hsl(50, 50%, 32%),
                        7px 7px hsl(50, 50%, 31%),
                        8px 8px hsl(50, 50%, 30%),
                        9px 9px hsl(50, 50%, 29%),
                        10px 10px hsl(50, 50%, 28%),
                        10px 10px 30px rgba(0,0,0,.7),
        }

        .meme-text.small{
            font-size: 18px;
            letter-spacing: 5px;
        }

        button {
            color: ${blue_color};
            cursor: pointer;
            display: inline-block;
            letter-spacing: 0.075em;
            padding: .8em 1em;
            margin: auto 2em;
            position: relative;
            align-self: center;
            text-transform: uppercase;
            border: 3px ${blue_color} solid;
            border-image: linear-gradient(45deg, ${blue_color} 0%, ${pink_color} 100%);
            border-image-slice: 1 1 0 0;
            z-index: 1;
            box-shadow: -0.5em .5em transparentize(${slate_color},1);
            transform-origin: left bottom;
            -webkit-transition: all 200ms ease-in-out;
            -moz-transition: all 200ms ease-in-out;
            -o-transition: all 200ms ease-in-out;
            transition: all 200ms ease-in-out;
            
                &::before,
                &::after {
                    border: 3px ${blue_color} solid;
                    content: '';
                    display: block;
                    position: absolute;
                    z-index: -1;
                }
            
                &::before {
                    border-image: linear-gradient(45deg, ${blue_color} 0%, adjust-hue(${blue_color},10%) 100%);
                    border-image-slice: 1 1 0 1;
                    left: -0.59em; top: .15em;
                    width: .31em;
                    height: 100%;
                    transform: skewY(-45deg);
                }
            
                &::after {
                    border-image: linear-gradient(45deg, ${blue_color} 0%, ${pink_color} 100%);
                    border-image-slice: 1 1 1 0;
                    bottom: -0.61em; right: 0.16em;
                    width: 100%;
                    height: .31em;
                    transform: skewX(-45deg);
                }
                
                &:hover {
                    background-color: white;
                    background-size: 90%;
                    transform: translate(0.5em,-0.5em);
                    box-shadow: -1em 1em .15em transparentize(${slate_color},.9);
                    // box-shadow: -1em 1em 1em transparentize(${blue_color},.9), -1em 1.9em 1.9em transparentize(${slate_color},.9), 0em .38em .38em transparentize(${slate_color},.9), 0em .76em .76em transparentize(${slate_color},.9), 0em 1.52em 1.52em transparentize(${slate_color},.9);
                    
                    
                    &:before {
                    background-image: (linear-gradient(45deg, ${blue_color} 0%, adjust-hue(${blue_color},10%) 100%));
                    height: calc(100% - .13em);
                    border-image-slice: 1;
                    }
                    
                    &:after {
                    background-image: (linear-gradient(45deg, ${blue_color} 0%, ${pink_color} 100%));
                    width: calc(100% - .13em);
                    border-image-slice: 1;
                    }
                }
            }

        }

        button.meme-btn {
            background-color: ${blue_color};
            background-image: (linear-gradient(45deg, ${blue_color} 0%, ${pink_color} 100%));
            border-image: linear-gradient(45deg, lighten(${blue_color},20%) 0%, lighten(${pink_color},20%) 100%);
            border-image-slice: 1;
            color: white;
            
            &::before {
                border-image-slice: 1;
                background-image: (linear-gradient(45deg, ${blue_color} 0%, adjust-hue(${blue_color},10%) 100%));
                left: -0.75em;
                top: .15em;
            }
            
            &::after {
                border-image-slice: 1;
                background-image: (linear-gradient(45deg, ${blue_color} 0%, ${pink_color} 100%));
                bottom: -0.75em;
                right: .15em;
            }
            
            &:hover {
                background: white;
                border-image: linear-gradient(45deg, ${blue_color} 0%, ${pink_color} 100%);
                border-image-slice: 1;
                color: ${slate_color};
                
                &::before {
                height: 100%;
                }
                &::after {
                width: 100%;
                }
            }
        }
    }

    @media only screen and (max-width: 565px){
        .meme-group{
            .meme-content{
                .meme-text{
                    font-size: 24px;
                    font-weight: bold;
                    &.small{
                        font-size: 12px;
                    }
                }
            }
        }
    }
`;

export default MemeWrapper;