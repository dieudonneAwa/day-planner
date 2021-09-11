import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';
import { setFlex, setPosition } from '../utils';
import Portal from './Portal';

const Backdrop = styled.div`
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

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  locked?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Modal(props: ModalProps) {
  const [active, setActive] = React.useState(false);
  const { open, onClose, locked, className } = props;
  const backdrop = React.useRef<HTMLDivElement>(null);

  const classes = classNames('modal-content', className);

  React.useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    function keyHandler(this: Window, e: KeyboardEvent) {
      if (!locked && [27].indexOf(e.which) >= 0) onClose();
    }

    function clickHandler(this: HTMLDivElement, e: MouseEvent) {
      if (!locked && e.target === current) onClose();
    }

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
      window.addEventListener('keyup', keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        setActive(open);
        document.querySelector('#__next')?.setAttribute('inert', 'true');
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener('transitionend', transitionEnd);
        current.removeEventListener('click', clickHandler);
      }

      document.querySelector('#__next')?.removeAttribute('inert');
      window.removeEventListener('keyup', keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          <Backdrop ref={backdrop} className={active && open ? 'active' : ''}>
            <div className={classes}>{props.children}</div>
          </Backdrop>
        </Portal>
      )}
    </React.Fragment>
  );
}
