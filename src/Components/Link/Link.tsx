import React, { FC } from "react";
import { ReactType } from "react";
import { IClassNameProps } from "@bem-react/core";
import { cn } from "@bem-react/classname";
import "./Link.css";

export interface ILinkProps extends IClassNameProps {
  as?: ReactType;
  comp: string;
  href: string;
  color?: string;
  size: string;
  checked?: boolean;
  count?: boolean;
  countBg?: string;
}

export const cnLink = cn("link");

export const Link: React.FC<ILinkProps> = ({
  children,
  comp,
  href,
  color,
  size,
  checked,
  count,
  countBg
}) => (
  <a
    href={href}
    className={cnLink({ comp, color, size, checked, count, countBg })}
  >
    {children}
  </a>
);
