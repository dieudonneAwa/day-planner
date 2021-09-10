import { Dispatch, Task, TaskTimeBox } from '../components/common';
import { uidGenerator } from '../components/common/utils';
import { Types } from './action-types';

export const createTimeBox = (payload: TaskTimeBox) => (dispatch: Dispatch) =>
  dispatch({
    type: Types.CREATE_TIME_BOX,
    payload: {
      ...payload,
      id: uidGenerator(),
    },
  });

export const fetchTimeBoxes = () => (dispatch: Dispatch) =>
  dispatch({ type: Types.LOAD_TIME_BOXES });

export const createTask = (payload: Task) => (dispatch: Dispatch) =>
  dispatch({ type: Types.LOAD_TIME_BOXES, payload: { ...payload, id: uidGenerator() } });

export const updateTask = (task: Task) => (dispatch: Dispatch) =>
  dispatch({ type: Types.UPDATE_TASK, payload: task });

export const deleteTask = (task: Task) => (dispatch: Dispatch) =>
  dispatch({ type: Types.DELETE_TASK, payload: task });
