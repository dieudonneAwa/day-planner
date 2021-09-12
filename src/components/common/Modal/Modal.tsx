import classNames from 'classnames';
import React from 'react';
import { BaseHtmlProps, BaseProps } from '..';
import { Backdrop } from './Modal.styled';
import Portal from './Portal';

export interface ModalProps extends BaseProps, BaseHtmlProps<HTMLDivElement> {
  open: boolean;
  onClose: () => void;
  locked?: boolean;
  children: React.ReactNode;
}

export default function Modal(props: ModalProps) {
  const [active, setActive] = React.useState(false);
  const { open, onClose, locked, className, ...rest } = props;
  const backdrop = React.useRef<HTMLDivElement>(null);

  const classes = classNames('modal-content', className);

  React.useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    function clickHandler(this: HTMLDivElement, e: MouseEvent) {
      if (!locked && e.target === current) onClose();
    }

    if (current) {
      current.addEventListener('transitionend', transitionEnd);
      current.addEventListener('click', clickHandler);
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
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          <Backdrop ref={backdrop} className={active && open ? 'active' : ''}>
            <div className={classes} {...rest}>
              {props.children}
            </div>
          </Backdrop>
        </Portal>
      )}
    </React.Fragment>
  );
}
