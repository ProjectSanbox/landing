import { createGlobalStyle } from 'styled-components';
import 'aos/dist/aos.css';

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

@font-face {
  font-family: "SFUEurostile";
  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632470681564vlNGTuVGcM.TTF");
  font-style: normal;
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: "SFUEurostileBold";
  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472400888ysqRyQc8dg.TTF");
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "SFUEurostileNormal";
  src: url("https://vicapay-test.sgp1.digitaloceanspaces.com/1632472419173Aj5Sh8Fx2d.TTF");
  font-style: normal;
  font-display: swap;
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
  background: #000000;
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
    font-family: 'SFUEurostileBold', sans-serif;
    font-size: 48px;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 700;
    color: ${props => props.theme.primaryColor};
}

p{
    font-family: 'SFUEurostile', sans-serif;
    margin: 0 0 15px 0;
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
}

a{
    text-decoration: none;
    color: ${props => props.theme.headingColor};
    font-family: 'SFUEurostile', sans-serif;
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
