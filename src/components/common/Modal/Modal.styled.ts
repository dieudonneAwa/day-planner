import styled from "styled-components";
import { setFlex, setPosition } from '../utils';

export const Backdrop = styled.div`
  ${setPosition('fixed', 0, 0, 0, 0)}
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 100ms;
  ${setFlex('center', 'center')}

  & .modal-content {
    transform: translateY(100px);
    transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
    position: relative;
    padding: 1.5rem;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    background: ${(p) => p.theme.colors['blue-cadet']};
    max-width: 800px;
    max-height: 500px;
    flex: 1;
    height: 100%;
  }

  &.active {
    transition-duration: 250ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;
