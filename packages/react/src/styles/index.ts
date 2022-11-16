import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  media,
  radii,
  space,
  utils,
} from '@poc-fapp-ui/tokens'
import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme,
} = createStitches({
  theme: {
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    media,
    radii,
    space,
  },
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  utils,
})
