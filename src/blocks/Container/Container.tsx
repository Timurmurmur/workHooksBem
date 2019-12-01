import React, { FC } from 'react'
import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'
import './style/Container.css';
import './style/Header.css';
import './style/Wrapper.css';
import './style/Footer.css';
import './style/Main.css';

export interface IContainerProps extends IClassNameProps {
  as?: ReactType;
  comp: string;
  type: string;
}


export const Container: React.FC<IContainerProps> = ({ children, comp,type }) =>{
    const ContainerType = (type:string,comp:string) =>{
      const ContainerNane = cn(type);

      return ContainerNane({comp})
    }
    return (
      <div className={ContainerType(type,comp)}>
        {children}
      </div>
    );
  }
