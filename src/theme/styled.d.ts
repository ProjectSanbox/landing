import { FlattenSimpleInterpolation, ThemedCssFunction } from 'styled-components'

export type Color = string
export interface Colors {
  // base
  white: Color
  black: Color

  // Brand
  brand: Color

  primaryColor: Color
  primaryHoverColor: Color
  secondaryColor: Color
  headingColor: Color
  bodyColor: Color
  linkColor: Color
  navBg: Color
  navBgSolid: Color
  menuHoverColor: Color
  footerBg: Color

  // Black
  black1: Color
  black2: Color
  black6: Color

  // Blue
  blue1: Color

  // Yellow
  yellow2: Color

  // Rarity
  common3: Color
}

export interface Grids {
  sm: number
  md: number
  lg: number
}

declare module 'styled-components' {
  export interface DefaultTheme extends Colors {
    grids: Grids

    // shadows
    shadow1: string

    // media queries
    mediaWidth: {
      upToExtraSmall: ThemedCssFunction<DefaultTheme>
      upToSmall: ThemedCssFunction<DefaultTheme>
      upToMedium: ThemedCssFunction<DefaultTheme>
      upToLarge: ThemedCssFunction<DefaultTheme>
    }

    // media queries
    mediaMinWidth: {
      minFromExtraSmall: ThemedCssFunction<DefaultTheme>
      minFromSmall: ThemedCssFunction<DefaultTheme>
      minFromMedium: ThemedCssFunction<DefaultTheme>
      minFromLarge: ThemedCssFunction<DefaultTheme>
    }

    // css snippets
    flexColumnNoWrap: FlattenSimpleInterpolation
    flexRowNoWrap: FlattenSimpleInterpolation
  }
}
