import styled, { css, FlattenSimpleInterpolation } from 'styled-components';
import { Appearance } from '..';
import { space } from '../../../globals/theme/typography';
import { Family, Weight } from './Text';

export const sizeMapping = {
  sm: css`
    font-size: ${space.md};
    line-height: ${space.lg};
  `,
  md: css`
    font-size: ${space.lg};
    line-height: ${space['2xl']};
  `,
  lg: css`
    font-size: ${space.xl};
    line-height: ${space['3xl']};
  `,
  xl: css`
    font-size: ${space['2xl']};
    line-height: ${space['3xl']};
  `,
};

type StyledTextProps = {
  appearance: Appearance;
  weight: Weight;
  size: FlattenSimpleInterpolation;
  family: Family;
};

export const StyledText = styled.span<StyledTextProps>`
  ${(p) => p.size};
  font-weight: ${(p) => p.weight};
  font-family: ${(p) => p.theme.font.family[p.family]};
  color: ${(p) => p.theme.colors[p.appearance]};
`;
