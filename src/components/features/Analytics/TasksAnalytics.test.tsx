import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import TasksAnalytics from './TasksAnalytics';
import { StoreState } from '../../../redux/store';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../globals/theme';
import thunk from 'redux-thunk';

const middlewares = [thunk];

const mockStore = configureStore([...middlewares]);

describe('TasksAnalytics', (): void => {
  const initialState: StoreState = { myTasks: { tasks: [], taskGroups: {}, analytics: [] } };
  const store = mockStore(initialState);

  let wrapper: any;

  it('should be rendered', (): void => {
    wrapper = mount(
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <TasksAnalytics />
        </Provider>
      </ThemeProvider>
    );
    expect(wrapper).toBeDefined();
  });
});
