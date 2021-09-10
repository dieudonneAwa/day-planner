import styled from 'styled-components';
import { Appearance } from './Icon';

export const StyledIcon = styled.i<{ appearance: Appearance }>`
  color: ${(p) => p.theme.colors[p.appearance]};
`;
