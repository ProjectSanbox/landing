import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-thumb {
  background: #bdc3c7;
background: -webkit-linear-gradient(to right, #2c3e50, #bdc3c7); 
background: linear-gradient(to right, #2c3e50, #bdc3c7);

  border-radius: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  background: #000000;
}

::selection {
    background: #333333;
    color: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: smooth;
}

body,html {
    margin: 0px;
}
body {
  font-size: 16px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.bodyColor ? props.theme.bodyColor : '#BEABDF'};
  overflow-x: hidden !important;
  font-weight: 400;
  margin: 0;
  padding: 0;
  background: #0C0A15;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

#__next{
  overflow-x: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    color: ${props => props.theme.headingColor ? props.theme.headingColor : '#FFFFFF'};
    font-family: 'Bungee', cursive;
    font-size: 48px;
    line-height: 48px;
    text-transform: uppercase;
    font-weight: 700;
}

p{
    font-family: 'Oswald', sans-serif;
    margin: 0 0 15px 0;
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
}

a{
    text-decoration: none;
    color: ${props => props.theme.headingColor};
  }
  img{
    max-width: 100%;
  }


section{
    position: relative;
}

.text-center{
  text-align: center;
}

button, .btn{
  display: inline-block;
  width: 170px;
  height: 60px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
}

#container.visible{
  display: none!important;
  box-shadow: none;
}
`

export default GlobalStyle
