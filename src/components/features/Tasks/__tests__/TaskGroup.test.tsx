import React from 'react';
import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import TaskGroup from '../TaskGroup';
import { StoreState } from '../../../../redux/store';

const mockStore = configureStore([]);

describe('TaskGroup', (): void => {
  let wrapper: ShallowWrapper<void>;
  const initialState: StoreState = { myTasks: { tasks: [], taskGroups: {}, analytics: [] } };

  it('should be defined', (): void => {
    const store = mockStore(initialState);

    wrapper = shallow(
      <Provider store={store}>
        <TaskGroup shouldCreateTask groupDate={new Date().toDateString()} tasks={[]} />
      </Provider>
    );
    expect(wrapper).toBeDefined();
  });
});
