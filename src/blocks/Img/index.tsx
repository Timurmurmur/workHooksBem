import React, { FC } from 'react'
import { ReactType } from 'react'
import { IClassNameProps } from '@bem-react/core'
import { cn } from '@bem-react/classname'
import './style/Img.css';

export interface IImgProps extends IClassNameProps {
  as?: ReactType;
  size: string;
  comp: string;
  src: string;
  alt: string;
}

export const cnImg = cn('img')

export const Img: React.FC<IImgProps> = ({size, comp, src, alt }) => (
  <img src={src} alt={alt} className={cnImg({ comp, size })}/>
)