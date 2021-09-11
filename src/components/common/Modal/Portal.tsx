import React from 'react';
import ReactDOM from 'react-dom';

export interface PortalProps {
  children: React.ReactNode;
  parent?: Element;
  className?: string;
}

const Portal = ({ children, parent, className }: PortalProps) => {
  const el = React.useMemo(() => document.createElement('div'), []);
  React.useEffect(() => {
    const target = parent && parent.appendChild ? parent : document.body;
    const classList = ['portal'];

    if (className) className.split(' ').forEach((item) => classList.push(item));
    classList.forEach((item) => el.classList.add(item));
    target.appendChild(el);

    return () => {
      target.removeChild(el);
    };
  }, [el, parent, className]);
  return ReactDOM.createPortal(children, el);
};

export default Portal;
