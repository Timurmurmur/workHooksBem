import { cn } from "@bem-react/classname";
import { IClassNameProps } from "@bem-react/core";
import React from "react";
import { ReactType } from "react";
import "./Button.css";

export interface IButtonProps extends IClassNameProps {
  as?: ReactType;
  comp: string;
  size: string;
  color: string;
  onClick?: any;
}

export const cnButton = cn("button");

export const Button: React.FC<IButtonProps> = ({
  children,
  comp,
  size,
  color,
  onClick
}) => (
  <button onClick={onClick} className={cnButton({ comp, color, size })}>
    {children}
  </button>
);
