import React from 'react'
import { Text, TextProps as TextPropsOriginal } from 'rebass'
import styled, {
  createGlobalStyle,
  css,
  DefaultTheme,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components'
import { Colors } from './styled'

export * from './components'

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

    // Brand
    brand: '#FFD700',

    primaryColor: '#FFD700',
    primaryHoverColor: '#cce5ff',
    secondaryColor: '#383d41',
    headingColor: '#FFFFFF',
    bodyColor: '#ffffff',
    linkColor: '#1F2AD5',
    navBg: 'transparent',
    navBgSolid: '#290E59',
    menuHoverColor: '#1F2AD5',
    footerBg: '#17181c',

    // Black
    black1: '#131313',
    black2: '#DEDEDE',

    // Yellow
    yellow2: '#E08F1B',

    // Rarity
    common3: '#7D7D7D',
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
  const themeObject = theme()

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'primary1'} {...props} />
  },
  label(props: TextProps) {
    return <TextWrapper fontWeight={600} color={'text1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text1'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={11} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'blue1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'yellow3'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={500} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={500} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={500} color={error ? 'red1' : 'text2'} {...props} />
  },
}

export const ThemedGlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Normandia';
  src: url('assets/fonts/Normandia/Normandia.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Square721 BT';
  src: url('assets/fonts/Square721bt/Square-721-BT.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'SFU Eurostile';
  src: url('assets/fonts/SFUEurostile/SFUEurostile.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'SFU Eurostile Bold';
  src: url('assets/fonts/SFUEurostile/SFUEurostileBold.ttf') format('truetype');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.black};
  background-color: ${({ theme }) => theme.white} !important;
}

*{
  // font-family: 'Poppins', sans-serif;
}

a {
 color: ${({ theme }) => theme.linkColor}; 
 cursor: pointer;
}
a, a:hover {
  text-decoration: none !important;
}
body{
  background-color:transparent;
  color: ${({ theme }) => theme.primaryColor} !important; 
  font-size: 14px;
  font-weight: 500;
  margin: 0;
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

h1,h2,h3,h4,h5,h6,p {
  margin: 0;
}

hr {
  margin-top: 8px;
  margin-bottom: 8px;
}

ul {
  list-style: none;
  padding-left: 0 !important;
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
