import { AnyAction as Action } from 'redux';

export interface BaseProps {
  className?: string;
}
export type BaseHtmlProps<T> = Omit<React.HTMLProps<T>, 'ref' | 'size' | 'className'>;
export type Appearance =
  | 'white'
  | 'blue-oxford'
  | 'blue-oxforddark'
  | 'blue-grey'
  | 'blue-cadet'
  | 'blue-cadetcrayola';

export type Time = { start: string; end: string };

export type Task = {
  id: string;
  title: string;
  position?: number;
  timeBox: TaskTimeBox;
};

export interface TaskTimeBox {
  id: string;
  time: Time;
  tasks: Task[];
  title: string;
}

export type Dispatch = (action: Action) => Action;
