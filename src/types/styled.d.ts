/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import { theme } from '~/styles/theme';

declare module 'styled-components' {
  type Theme = typeof theme;

  type ThemeColors = typeof theme.colors;
  type ThemeFontSizes = typeof theme.fontSizes;

  export type ColorScheme = keyof ThemeColors;
  export type FontsSizesScheme = keyof ThemeFontSizes;

  export interface DefaultTheme extends Theme {}
}
