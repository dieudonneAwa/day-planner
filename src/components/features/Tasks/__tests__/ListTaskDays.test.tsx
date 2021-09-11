import React from 'react';
import { Provider } from 'react-redux';
import { shallow, ShallowWrapper } from 'enzyme';
import configureStore from 'redux-mock-store';
import ListTaskDays from '../ListTaskDays';
import { StoreState } from '../../../../redux/store';

const mockStore = configureStore([]);

describe('ListTaskDays', (): void => {
  let wrapper: ShallowWrapper<void>;
  const initialState: StoreState = { myTasks: { tasks: [] } };

  it('should be defined', (): void => {
    const store = mockStore(initialState);
    wrapper = shallow(
      <Provider store={store}>
        <ListTaskDays />
      </Provider>
    );
    expect(wrapper).toBeDefined();
  });
});
