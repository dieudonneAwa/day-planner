import * as React from 'react';
import classNames from 'classnames';
import { Appearance, BaseHtmlProps, BaseProps } from '..';
import { StyledIcon } from './Icon.styled';

export type IconType = 'filled'; // only 'filled' is used.

export interface IconProps extends BaseProps, BaseHtmlProps<HTMLElement> {
  name?: string;
  size?: number;
  appearance?: Appearance;
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  children?: React.ReactNode;
}

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
    return (
      <span data-test="custom-icon" className={className}>
        {children}
      </span>
    );
  }

  return (
    <StyledIcon
      data-test="material-icon"
      appearance={appearance}
      className={iconClass}
      style={styles}
      onClick={onClick}
    >
      {name}
    </StyledIcon>
  );
};

Icon.displayName = 'Icon';

export default Icon;
