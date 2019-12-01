import React, { FC } from 'react';
import { ReactType } from 'react';
import { IClassNameProps } from '@bem-react/core';
import { cn } from '@bem-react/classname';

export interface ISelectProps extends IClassNameProps {
  as?: ReactType;
  comp: string;

  options: Array<string>;
}

export const cnSelect = cn('select')

export const Select: React.FC<ISelectProps> = ({ comp,options }) => (
    <>
        <div className="wrapper wrapper_comp_select">
            <select className={cnSelect({comp})}>
                {
                    options.map(el => {
                        return(<option>{el}</option>)
                    })
                }
            </select>
        </div>
    </>
)