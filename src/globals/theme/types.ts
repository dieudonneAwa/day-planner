export type Colors = {
  white: string;
  black: string;
  'blue-oxford': string;
  'blue-oxforddark': string;
  'blue-grey': string;
  'blue-cadet': string;
  'blue-cadetcrayola': string;
};

export type Space = {
  none: string;
  xx: string;
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
  '7xl': string;
  '8xl': string;
  '9xl': string;
  '10xl': string;
};

export type Font = {
  family: {
    poppins: string;
    default: string;
    encode: string;
  };
  size: Space;
};

export type Radii = {
  none: string;
  small: string;
  medium: string;
  large: string;
  huge: string;
};

export type Article = {
  id: string;
  createdAt: string;
  title: string;
  content: string;
  createdBy: string;
};

export type Action = {
  type: string;
  payload?: any;
};

export type User = {
  id: string;
  name: string;
  avatar: string;
  createdAt: string;
};

export type Comment = {
  id: string;
  name: string;
  createdAt: string;
  content: string;
};

export type AppTheme = 'light' | 'dark';
