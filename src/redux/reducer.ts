import { AnyAction as Action } from 'redux';
import storage from './storage';
import { Analytic, Task, TaskGroup } from '../components/common';
import { Types } from './action-types';
import { getDateString } from '../components/common/utils';

export interface TaskState {
  tasks: Task[];
  taskGroups: TaskGroup;
  analytics: Analytic[];
}

export const taskInitialState: TaskState = {
  tasks: [],
  taskGroups: {},
  analytics: [],
};

const generateTaskGroupHash = (tasks: Task[]) => {
  const taskGroups = tasks.reduce((acc: TaskGroup, task) => {
    let group = acc[`${getDateString(task.createdAt as string)}`];
    if (!group) {
      acc[`${getDateString(task.createdAt as string)}`] = [task];
    } else {
      acc[`${getDateString(task.createdAt as string)}`] = [...group, task];
    }
    return acc;
  }, {});

  return taskGroups;
};

export const reducer = (state: TaskState = taskInitialState, action: Action): TaskState => {
  const { type, payload } = action;

  switch (type) {
    case Types.LOAD_TASKS: {
      const taskGroups = generateTaskGroupHash(state.tasks);
      return {
        ...state,
        tasks: state.tasks,
        taskGroups,
      };
    }

    case Types.CREATE_TASK: {
      return {
        ...state,
        tasks: [...state.tasks, payload],
        taskGroups: generateTaskGroupHash([...state.tasks, payload]),
      };
    }

    case Types.UPDATE_TASK: {
      const updatedTasks = state.taskGroups[getDateString(payload.createdAt)]?.map((task: Task) => {
        if (task.id === payload.id) {
          return payload;
        }
        return task;
      });

      return {
        ...state,
        tasks: state.tasks.map((task: Task) => {
          if (task.id === payload.id) {
            return payload;
          }
          return task;
        }),
        taskGroups: {
          ...state.taskGroups,
          [getDateString(payload.createdAt)]: updatedTasks,
        },
      };
    }

    case Types.DELETE_TASK: {
      const updatedTasks = state.taskGroups[getDateString(payload.createdAt)]?.filter(
        (task: Task) => task.id !== payload.id
      );

      return {
        ...state,
        tasks: state.tasks.filter((task: Task) => task.id !== payload.id),
        taskGroups: {
          ...state.taskGroups,
          [getDateString(payload.createdAt)]: updatedTasks,
        },
      };
    }

    case Types.LOAD_ANALYTICS: {
      const data = state.tasks.map((task) => ({
        name: task.title,
        value: typeof task.timeBox === 'string' ? parseInt(task.timeBox, 10) : task.timeBox,
      }));

      return { ...state, analytics: data };
    }

    default:
      return state;
  }
};

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'], // place to select which state you want to persist
  blacklist: ['analytics'],
};
