import { colors, darkThemeColors } from './colors';
import { Colors, Font, Radii, Space } from './types';
import { font, space } from './typography';
import radii from './radii';

export interface DefaultTheme {
  colors: Colors;
  font: Font;
  radii: Radii;
  space: Space;
}

const theme: DefaultTheme = {
  colors,
  font,
  radii,
  space,
};

const darkTheme: DefaultTheme = {
  ...theme,
  colors: darkThemeColors,
};

export { theme, darkTheme };
