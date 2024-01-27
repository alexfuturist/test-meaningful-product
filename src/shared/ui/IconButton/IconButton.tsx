'use client';
import React from 'react';
import cn from 'classnames';
import { SvgIcon } from '../SvgIcon';
import { TIconName } from '@/shared/types';
import s from './IconButton.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  iconName: TIconName;
}

export const IconButton: React.FC<IconButtonProps> = (props) => {
  const { className, iconName, ...restProps } = props;

  return (
    <button
      type="button"
      className={cn(s.IconButton, className)}
      {...restProps}
    >
      <SvgIcon name={iconName} />
    </button>
  );
};
