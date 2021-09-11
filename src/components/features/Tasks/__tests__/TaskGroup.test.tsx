import React from 'react';
import { Provider } from 'react-redux';
import { mount, ReactWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import TaskGroup, { Props } from '../TaskGroup';
import { StoreState } from '../../../../redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../../globals/theme';
import { findByTestAttr } from '../../../common/utils';
import { Task } from '../../../common';

const mockStore = configureStore([]);

const sampleTasks: Task[] = [
  {
    id: 1,
    timeBox: '23',
    title: 'Task 1',
    createdAt: '2021-09-11T16:08:45.087Z',
  },
  {
    id: 2,
    timeBox: '23',
    shouldEdit: true,
    title: 'Task 2',
    createdAt: '2021-09-11T16:08:45.087Z',
  },
];

describe('TaskGroup', (): void => {
  let wrapper: ReactWrapper<Props, {}, any>;
  const initialState: StoreState = { myTasks: { tasks: [], taskGroups: {}, analytics: [] } };
  const store = mockStore(initialState);

  wrapper = mount(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TaskGroup
          shouldCreateTask={false}
          groupDate={new Date().toDateString()}
          tasks={sampleTasks}
        />
      </Provider>
    </ThemeProvider>
  );

  it('should be rendered', (): void => {
    expect(wrapper).toBeDefined();
  });

  it('should successfully simulate click events', (): void => {
    const taskCreate = findByTestAttr(wrapper, 'Task--create');
    const singleTask = findByTestAttr(wrapper, 'Single-task');

    taskCreate.forEach((el) => el.simulate('click'));
    const taskForm = findByTestAttr(wrapper, 'Task--form');

    expect(taskForm).toBeDefined();
    expect(singleTask).toBeDefined();
  });
});
