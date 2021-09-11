import { Dispatch, Task } from '../components/common';
import { Types } from './action-types';
import { StoreState } from './store';

export const createTaskAction =
  (payload: Task) => (dispatch: Dispatch, getState: () => StoreState) => {
    const { myTasks } = getState();
    dispatch({
      type: Types.CREATE_TASK,
      payload: {
        ...payload,
        id: myTasks.tasks.length + 1,
        createdAt: new Date(),
      },
    });
  };

export const loadTasksAction = () => (dispatch: Dispatch) => dispatch({ type: Types.LOAD_TASKS });

export const updateTaskAction = (task: Task) => (dispatch: Dispatch) =>
  dispatch({
    type: Types.UPDATE_TASK,
    payload: { ...task, updatedAt: new Date(), shouldEdit: false },
  });

export const deleteTaskAction = (task: Task) => (dispatch: Dispatch) =>
  dispatch({ type: Types.DELETE_TASK, payload: task });

export const loadTasksAnalyticsAction = () => (dispatch: Dispatch) => dispatch({ type: Types.LOAD_ANALYTICS });
