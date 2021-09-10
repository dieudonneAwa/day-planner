import styled from 'styled-components';
import { setFlex, setPosition } from '../../common/utils';

export const TimeBoxWrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
  min-height: 100px;
  margin-top: 3rem;
`;

export const BoxLabel = styled.header`
  font-family: ${(p) => p.theme.font.family.encode};
  color: ${(p) => p.theme.colors['blue-grey']};
  ${setPosition('relative')}
  ${setFlex('flex-start', 'center')}
  margin-bottom: 1rem;

  span.circle {
    width: 30px;
    height: 30px;
    min-width: 30px;
    border-radius: 50%;
    min-height: 30px;
    background: ${(p) => p.theme.colors['blue-cadet']};
    ${setPosition('absolute', '-3.6rem')}
  }
`;

export const Card = styled.div`
  padding: 1.5rem;
  background: ${(p) => p.theme.colors['blue-cadet']};
`;

export const StyledTask = styled.div`
  padding: 0.5rem 1rem;
  ${setFlex('space-between')}
  border-left: 1px solid ${(p) => p.theme.colors['space-cadet']};
  border-right: 1px solid ${(p) => p.theme.colors['space-cadet']};
  border-bottom: 1px solid ${(p) => p.theme.colors['space-cadet']};

  &:nth-of-type(1) {
    margin-top: 0.75rem;
    border-top: 1px solid ${(p) => p.theme.colors['space-cadet']};
  }

  .Task-content {
    ${setFlex('flex-start', 'flex-start', 'column')}
  }
  .Task-icons {
    ${setFlex('flex-start', 'center', 'row')}
  }
  .Task-icons .Icon {
    margin-left: 1.5rem;
    cursor: pointer;
  }
`;

export const ContentWrapper = styled.div`
  margin: 0 auto;
  margin-top: 4rem;
  max-width: 750px;
  width: 100%;
  ${setFlex('flex-start', 'stretch', 'column')}
  flex: 1;
  padding: 2rem 1rem;
  min-height: 90vh;
`;

export const TimeBoxesContainer = styled.div`
  border-left: 3px solid ${(p) => p.theme.colors['blue-cadet']};
  padding: 0 1.5rem;
  flex: 1;
`;
