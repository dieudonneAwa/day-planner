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
  id: number;
  title: string;
  shouldEdit?: boolean;
  timeBox: number; // Time box is in mins
  createdAt?: string;
  updatedAt?: string;
};

export type Dispatch = (action: Action) => Action;

export type TaskGroup = { [key: string]: Task[] };
