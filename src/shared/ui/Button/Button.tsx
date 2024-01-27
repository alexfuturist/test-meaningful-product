'use client';
import cn from 'classnames';
import React from 'react';
import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(s.Button, className)}
      {...restProps}
    >
      {children}
    </button>
  );
};
