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
