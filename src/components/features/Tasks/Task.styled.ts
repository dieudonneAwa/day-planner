import styled from 'styled-components';
import { setFlex, setPosition } from '../../common/utils';

export const GroupWrapper = styled.div`
  flex: 1;
  padding: 0 1rem;
  min-height: 100px;
  margin-top: 3rem;

  &:nth-of-type(1) {
    margin-top: 0;
  }
`;

export const GroupLabel = styled.header`
  font-family: ${(p) => p.theme.font.family.encode};
  color: ${(p) => p.theme.colors['blue-grey']};
  ${setPosition('relative')}
  ${setFlex('flex-start', 'center')}
  margin-bottom: 1rem;

  span.circle {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;
    border-radius: 50%;
    background: ${(p) => p.theme.colors['blue-cadet']};
    ${setPosition('absolute', '-3.6rem')}
    ${setFlex('center', 'center')}
  }
`;

export const Card = styled.div`
  padding: 1.5rem;
  background: ${(p) => p.theme.colors['blue-cadet']};
`;

export const StyledTask = styled.div`
  padding: 0.7rem 1rem;
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
    small {
      color: ${(p) => p.theme.colors['blue-grey']};
      opacity: 0.8;
      margin-left: 0.15rem;
    }
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
  margin-top: 2rem;
  max-width: 750px;
  width: 100%;
  ${setFlex('flex-start', 'stretch', 'column')}
  flex: 1;
  padding: 2rem 1rem;
  min-height: 90vh;
`;

export const TaskGroupsContainer = styled.div`
  border-left: 3px solid ${(p) => p.theme.colors['blue-cadet']};
  padding: 0 1.5rem;
  flex: 1;
`;

export const TaskForm = styled.form`
  ${setFlex('flex-start', 'center')}
  padding: 1rem 0;
  label {
    margin-right: 1rem;
    margin-bottom: 0.25rem;
    font-weight: 500;
  }

  .cancel-btn {
    margin-left: 1rem;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    ${setFlex('flex-start', 'stretch', 'column')}
    .cancel-btn {
      margin-left: 0;
    }
  }
`;

export const StyledInput = styled.input`
  background: transparent;
  border: 1px solid ${(p) => p.theme.colors['blue-grey']};
  padding: 0.5rem;
  border-radius: 4px;
  outline: none;
  height: 2.3rem;
  color: ${(p) => p.theme.colors['blue-grey']};
  margin-right: 1rem;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 1rem;
  }
`;

export const SubmitButton = styled.button`
  position: relative;
  ${setFlex('center', 'center')}
  user-select: none;
  border: 0;
  cursor: pointer;
  text-align: center;
  height: 2.3rem;
  padding: 0 1.5rem;
  color: ${(p) => p.theme.colors['blue-grey']};
  background: ${(p) => p.theme.colors['blue-oxford']};
  border-radius: 4px;
`;
