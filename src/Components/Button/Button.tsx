import React from 'react';
import { ReactType } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import './Button.css';

export interface IButtonProps extends IClassNameProps {
  as?: ReactType;
  comp: string;
  size: string;
  color: string;
}

export const cnButton = cn('button');

export const Button: React.FC<IButtonProps> = ({
  children,
  comp,
  size,
  color
}) => <button className={cnButton({ comp, color, size })}>{children}</button>;
