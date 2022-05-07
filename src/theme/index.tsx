import React, { useMemo } from 'react'
import { Text, TextProps as TextPropsOriginal } from 'rebass'
import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'
import { Colors } from './styled'

type TextProps = Omit<TextPropsOriginal, 'css'>

export const MEDIA_WIDTHS = {
  upToExtraSmall: 500,
  upToSmall: 767,
  upToMedium: 991,
  upToLarge: 1280,
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

export const MEDIA_MIN_WIDTHS = {
  minFromExtraSmall: 500,
  minFromSmall: 768,
  minFromMedium: 992,
  minFromLarge: 1280,
}

const mediaMinWidthTemplates: { [width in keyof typeof MEDIA_MIN_WIDTHS]: typeof css } = Object.keys(
  MEDIA_MIN_WIDTHS
).reduce((accumulator, size) => {
  ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
    @media (min-width: ${(MEDIA_MIN_WIDTHS as any)[size]}px) {
      ${css(a, b, c)}
    }
  `
  return accumulator
}, {}) as any

const white = '#FFFFFF'
const black = '#000000'

export function colors(): Colors {
  return {
    // base
    white,
    black,
  }
}

export function theme(): DefaultTheme {
  return {
    ...colors(),

    grids: {
      sm: 8,
      md: 12,
      lg: 24,
    },

    //shadows
    shadow1: '#000000',

    // media queries
    mediaWidth: mediaWidthTemplates,

    mediaMinWidth: mediaMinWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `,
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const themeObject = useMemo(() => theme(), [])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const ThemedGlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Poppins-Regular';
  src: url('assets/fonts/Poppins-Regular.eot'), url('assets/fonts/Poppins-Regular.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-Regular.woff') format('woff'), url('assets/fonts/Poppins-Regular.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins';
  src: url('assets/fonts/Poppins-Medium.eot'), url('assets/fonts/Poppins-Medium.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-Medium.woff') format('woff'), url('assets/fonts/Poppins-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
}

@font-face {
  font-family: 'PoppinsItalic';
  src: url('assets/fonts/Poppins-MediumItalic.eot') url('assets/fonts/Poppins-MediumItalic.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-MediumItalic.woff') format('woff'), url('assets/fonts/Poppins-MediumItalic.ttf') format('truetype');
    font-weight: 500;
    font-style: italic;
    font-display: swap;
}

@font-face {
  font-family: 'Poppins-SemiBold';
  src: url('assets/fonts/Poppins-SemiBold.eot'), url('assets/fonts/Poppins-SemiBold.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-SemiBold.woff') format('woff'), url('assets/fonts/Poppins-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
}

@font-face {
  font-family: 'Poppins-SemiBoldItalic';
  src: url('assets/fonts/Poppins-SemiBoldItalic.eot'), url('assets/fonts/Poppins-SemiBoldItalic.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-SemiBoldItalic.woff') format('woff'), url('assets/fonts/Poppins-SemiBoldItalic.ttf') format('truetype');
    font-weight: 600;
    font-style: italic;
    font-display: swap;
}

@font-face {
  font-family: 'Poppins-Bold';
  src: url('assets/fonts/Poppins-Bold.eot'), url('assets/fonts/Poppins-Bold.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-Bold.woff') format('woff'), url('assets/fonts/Poppins-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
}
@font-face {
  font-family: 'Poppins-BoldItalic';
  src: url('assets/fonts/Poppins-BoldItalic.eot'), url('assets/fonts/Poppins-BoldItalic.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-BoldItalic.woff') format('woff'), url('assets/fonts/Poppins-BoldItalic.ttf') format('truetype');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
}

@font-face {
  font-family: 'Poppins-Black';
  src: url('assets/fonts/Poppins-Black.eot'), url('assets/fonts/Poppins-Black.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-Black.woff') format('woff'), url('assets/fonts/Poppins-Black.ttf') format('truetype');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Poppins-BlackItalic';
  src: url('assets/fonts/Poppins-BlackItalic.eot'), url('assets/fonts/Poppins-BlackItalic.eot?#') format('embedded-opentype'),
    url('assets/fonts/Poppins-BlackItalic.woff') format('woff'), url('assets/fonts/Poppins-BlackItalic.ttf') format('truetype');
    font-weight: 900;
    font-style: italic;
    font-display: swap;
}


body {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.white};
}

*{
  // font-family: 'Poppins', sans-serif;
}

a {
 
}
a, a:hover {
  text-decoration: none;
}
body{
  background-color:transparent;
  color: ${({ theme }) => theme.white} !important; 
  font-size: 14px;
  font-weight: 500;
}
img {
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  height: auto;
  object-fit: cover;
}
svg {
  max-width: 100%;
}
.modal-content{
  border-radius: 20px !important;
}
button:focus{
  box-shadow: 0 0 0 !important; 
}

/* Transitions */
.slide-enter,
.slide-exit {
  transition: transform 300ms ease-out;
}

.slide-enter {
  transform: translateX(100%);
}

.slide-enter.slide-enter-active {
  transform: translateX(0%);
}

/* Hide previous page */
.slide-exit {
  opacity: 0;
}

.slide-exit-active {
  transform: translateX(-100%);
}

// Flex
.flex {
  display: flex;
  &.justify-direction-column {
    justify-direction: column
  }
  &.justify-content-between {
    justify-content: space-between;
  }
  &.justify-content-center {
    justify-content: center;
  }
  &.justify-content-start {
    justify-content: flex-start;
  }
  &.justify-content-end {
    justify-content: flex-end;
  }
  &.align-items-center {
    align-items: center;
  }
  &.align-items-start {
    align-items: flex-start;
  }
  &.align-items-end {
    align-items: flex-end;
  }
}

.bold {
  font-family: 'Poppins-Bold';
  font-weight: 700;
}

`
