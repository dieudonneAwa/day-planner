import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '../../common/Icon';
import { LayoutWrapper } from './PageLayout.styled';
import Modal from '../../common/Modal/Modal';
import { TasksAnalytics } from '../Analytics';
import { loadTasksAnalyticsAction } from '../../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import { StoreState } from '../../../redux/store';

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
