import React, { FC } from 'react'
import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'
import './style/Button.css';

export interface IButtonProps extends
    IClassNameProps,
    React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  as?: ReactType;
  comp: string;
  size: string;
  color: string;
}

export const cnButton = cn('button')

export const Button: React.FC<IButtonProps> = ({children, comp, size, color, ...props }) => (
  <button className={cnButton({ comp, color, size })} {...props}>
      {children}
  </button>
);
