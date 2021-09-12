import * as React from 'react';

import { BaseProps, BaseHtmlProps, Appearance } from '..';
import { sizeMapping, StyledText } from './Text.styled';

export type Size = 'md' | 'sm' | 'lg' | 'xl';
export type Weight = '200' | '300' | '400' | '500' | '600' | '700';
export type Family = 'default' | 'poppins' | 'encode';

export interface TextProps extends BaseProps, BaseHtmlProps<HTMLSpanElement> {
  children: React.ReactNode;
  appearance?: Appearance;
  weight?: Weight;
  family?: Family;
  size?: Size;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

export const Text = (props: TextProps) => {
  const {
    appearance = 'white',
    family = 'default',
    size = 'md',
    children,
    weight = '300',
    className,
    as,
    onClick = () => {},
    ...rest
  } = props;

  return (
    <StyledText
      appearance={appearance}
      size={sizeMapping[size]}
      weight={weight}
      family={family}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </StyledText>
  );
};

Text.displayName = 'Text';

export default Text;
