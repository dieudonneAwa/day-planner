import { AnyAction as Action } from 'redux';
import storage from 'redux-persist/lib/storage';
import { TaskTimeBox } from '../components/common';
import { Types } from './action-types';

export interface StoreState {
  timeBoxes: TaskTimeBox[];
}

export const storeInitialState = {
  timeBoxes: [],
};

export const reducer = (state: StoreState = storeInitialState, action: Action): StoreState => {
  const { type, payload } = action;

  switch (type) {
    case Types.CREATE_TIME_BOX:
      return { ...state, timeBoxes: [...state.timeBoxes, payload] };

    case Types.LOAD_TIME_BOXES:
      return { ...state, timeBoxes: state.timeBoxes };

    case Types.CREATE_TASK: {
      const timeBoxes = state.timeBoxes.reduce((acc: TaskTimeBox[], currentbox: TaskTimeBox) => {
        if (currentbox.id === payload.timeBox.id) {
          currentbox.tasks = [...currentbox.tasks, payload];
          return [...acc, currentbox];
        }
        return [...acc, currentbox];
      }, []);

      return {
        ...state,
        timeBoxes,
      };
    }

    case Types.UPDATE_TASK: {
      const timeBoxes = state.timeBoxes.reduce((acc: TaskTimeBox[], currentbox: TaskTimeBox) => {
        if (currentbox.id === payload.timeBox.id) {
          currentbox.tasks = currentbox.tasks.map((task) => {
            if (task.id === payload.id) return payload;
            return task;
          });
          return [...acc, currentbox];
        }
        return [...acc, currentbox];
      }, []);

      return {
        ...state,
        timeBoxes,
      };
    }

    case Types.DELETE_TASK: {
      const timeBoxes = state.timeBoxes.reduce((acc: TaskTimeBox[], currentbox: TaskTimeBox) => {
        if (currentbox.id === payload.timeBox.id) {
          currentbox.tasks = currentbox.tasks.filter((task) => task.id !== payload.id);
          return [...acc, currentbox];
        }
        return [...acc, currentbox];
      }, []);

      return {
        ...state,
        timeBoxes,
      };
    }
    default:
      return state;
  }
};

export const persistConfig = {
  key: 'primary',
  storage,
  whitelist: ['exampleData'], // place to select which state you want to persist
};
