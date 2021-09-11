import { ReactWrapper, ShallowWrapper } from 'enzyme';
import { css, FlattenSimpleInterpolation } from 'styled-components';

// SET FLEX
export const setFlex: (
  justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-even',
  align?: 'flex-start' | 'flex-end' | 'center' | 'stretch',
  direction?: 'row' | 'column'
) => FlattenSimpleInterpolation = (justify = 'flex-start', align = 'stretch', direction = 'row') =>
  css`
    display: flex;
    justify-content: ${justify};
    align-items: ${align};
    flex-direction: ${direction};
  `;

// SET POSITION
export const setPosition: (
  position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed',
  left?: string | number,
  top?: string | number,
  right?: string | number,
  bottom?: string | number
) => FlattenSimpleInterpolation = (
  position = 'relative',
  left = '',
  top = '',
  right = '',
  bottom = ''
) =>
  css`
    position: ${position};
    left: ${left};
    top: ${top};
    right: ${right};
    bottom: ${bottom};
  `;

// For component test purpose
export const findByTestAttr = (wrapper: ShallowWrapper<void> | ReactWrapper<any>, val: string) =>
  wrapper.find(`[data-test="${val}"]`);

export const getDateString = (date: string) => new Date(date).toDateString();
