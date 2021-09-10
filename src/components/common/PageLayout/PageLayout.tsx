import React from 'react';
import Link from 'next/link';
import { Icon } from '../Icon';
import { LayoutWrapper } from './PageLayout.styled';

export interface Props {
  children: React.ReactNode;
}

const PageLayout = (props: Props) => {
  const { children } = props;

  return (
    <LayoutWrapper>
      <div className="nav">
        <Link href="/">
          <a>
            <h1>My Planner</h1>
          </a>
        </Link>
        <Link href="/settings">
          <a>
            <Icon size={20} className="cursor-pointer" name="settings" />
          </a>
        </Link>
      </div>
      {children}
    </LayoutWrapper>
  );
};

export default PageLayout;
