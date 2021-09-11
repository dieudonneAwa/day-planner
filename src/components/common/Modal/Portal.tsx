import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  className?: string;
}

const Portal = ({ children, className }: PortalProps) => {
  const el = React.useMemo(() => document.createElement('div'), []);

  React.useEffect(() => {
    const target = document.body;
    const classList = ['portal'];

    if (className) className.split(' ').forEach((item) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el, className]);

  return ReactDOM.createPortal(children, el);
};

export default Portal;
