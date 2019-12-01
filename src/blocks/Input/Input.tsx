import React, { FC } from 'react'
import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'
import './style/Input.css';

export interface IInputProps extends IClassNameProps {
  as?: ReactType;
  comp: string;
  size: string;
  placeholder: string;
  type: string;
  onchange?: any;
  value?: string;
}

export const cnInput = cn('input')

export const Input: React.FC<IInputProps> = ({ value,comp, size, placeholder, type, onchange }) => (
  <input value={value} placeholder={placeholder} type={type} onChange={onchange} className={cnInput({ comp,size })}/>
)