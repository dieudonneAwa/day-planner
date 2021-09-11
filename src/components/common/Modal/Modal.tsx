import classNames from 'classnames';
import React from 'react';
import { Backdrop } from './Modal.styled';
import Portal from './Portal';

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
