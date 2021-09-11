import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import EmptyState from '../EmptyState';
import { Task } from '../../../common';
import { findByTestAttr } from '../../../common/utils';
import { StoreState } from '../../../../redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../globals/theme';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);

const sampleTasks = [
  {
    id: 1,
    timeBox: '23',
    title: 'Task 1',
    createdAt: '2021-09-11T16:08:45.087Z',
  },
  {
    id: 3,
    timeBox: '23',
    title: 'Task 2',
    createdAt: '2021-09-11T16:08:45.087Z',
  },
];

describe('EmptyState', (): void => {
  let wrapper: any;

  it('should be rendered', (): void => {
    const initialState: StoreState = {
      myTasks: { tasks: sampleTasks, taskGroups: {}, analytics: [] },
    };
    const store = mockStore(initialState);

    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <EmptyState
            handleChange={jest.fn()}
            handleCreate={jest.fn()}
            handleAddOrEditCancel={jest.fn()}
            setShouldCreateTask={jest.fn()}
            shouldCreateTask={false}
            currentTask={{} as Task}
          />
        </Provider>
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
  });

  it('should successfully simulate click events', (): void => {
    const taskCreate = findByTestAttr(wrapper, 'Task--create');
    taskCreate.forEach((el) => el.simulate('click'));
  });
});
