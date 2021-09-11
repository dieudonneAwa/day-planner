import React from 'react';
import Link from 'next/link';
import { LayoutWrapper } from './PageLayout.styled';
import { TasksAnalytics } from '../Analytics';

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
        <TasksAnalytics />
      </div>
      {children}
    </LayoutWrapper>
  );
};

export default PageLayout;
