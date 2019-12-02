import React from 'react';
import { ReactType } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';
import './Checkbox.css';

export interface ICheckboxProps extends IClassNameProps {
  as?: ReactType;
  comp: string;
}

export const cnCheckbox = cn('checkbox');

export const Checkbox: React.FC<ICheckboxProps> = ({ children, comp }) => (
  <>
    <div className={cnCheckbox({ comp })}>
      <input id="checkbox" type="checkbox"></input>
      <label htmlFor="checkbox">{children}</label>
    </div>
  </>
);
