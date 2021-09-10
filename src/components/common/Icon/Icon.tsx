import * as React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import { BaseProps } from '..';

export type Appearance =
  | 'white'
  | 'blue-oxford'
  | 'blue-oxforddark'
  | 'blue-grey'
  | 'blue-cadet'
  | 'blue-cadetcrayola';
export type IconType = 'filled'; // only 'filled' is used.

export interface IconProps extends BaseProps {
  name?: string;
  size?: number;
  appearance?: Appearance;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

const StyledIcon = styled.i<{ appearance: Appearance }>`
  color: ${(p) => p.theme.colors[p.appearance]};
`;

export const Icon = (props: IconProps) => {
  const { appearance = 'blue-grey', className, name, size = 16, onClick, children } = props;

  const iconClass = classNames({
    ['material-icons flex-shrink-0 overflow-hidden select-none']: true,
    [`${className}`]: className,
  });

  const styles = {
    fontSize: `${size}px`,
    width: `${size}px`,
  };

  if (children && React.isValidElement(children)) {
    return <span className={className}>{children}</span>;
  }
  return (
    <StyledIcon appearance={appearance} className={iconClass} style={styles} onClick={onClick}>
      {name}
    </StyledIcon>
  );
};

Icon.displayName = 'Icon';

export default Icon;
