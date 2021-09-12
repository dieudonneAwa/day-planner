import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import TasksAnalytics from './TasksAnalytics';
import { StoreState } from '../../../redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../globals/theme';
import thunk from 'redux-thunk';
import { findByTestAttr } from '../../common/utils';

const middlewares = [thunk];

const mockStore = configureStore([...middlewares]);

describe('TasksAnalytics', (): void => {
  const initialState: StoreState = {
    myTasks: { tasks: [], taskGroups: {}, analytics: [{ name: 'Data point', value: 40 }] },
  };
  const store = mockStore(initialState);

  let wrapper = mount(
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TasksAnalytics />
      </Provider>
    </ThemeProvider>
  );

  it('should be rendered', (): void => {
    expect(wrapper).toBeDefined();
  });

  it('should simulate events on clicking View Analytics', (): void => {
    const analyticsBtn = findByTestAttr(wrapper, 'analytics');
    analyticsBtn.forEach((el) => el.simulate('click'));
    
    const modal = findByTestAttr(wrapper, 'modal');
    modal.forEach((el) => el.simulate('click'));
    modal.forEach((el) => el.simulate('transitionend'));
  });
});
