import { DetailedHTMLProps, MutableRefObject, ReactNode } from 'react';

import { Word } from '.';

export interface TableRowProps {
  data: Word[];
  index: number;
  style: any;
}

export interface SvgProps
  extends DetailedHTMLProps<
    React.ObjectHTMLAttributes<HTMLObjectElement>,
    HTMLObjectElement
  > {
  path: string;
}

export interface LayoutProps {
  children: ReactNode;
  title: string;
}

export interface InputProps
  extends DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  icon?: ReactNode;
  addRef?: MutableRefObject<HTMLInputElement | null>;
}
