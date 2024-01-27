'use client';
import React from 'react';
import cn from 'classnames';
import { IconButton } from '../IconButton';
import s from './Header.module.scss';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onBackButtonClick?: () => void;
}

export const Header: React.FC<IconButtonProps> = (props) => {
  const { className, onBackButtonClick } = props;

  return (
    <header className={cn(s.Header, className)}>
      <IconButton
        iconName="arrow-left"
        onClick={onBackButtonClick}
      />
      <h1 className={s.Header__title}>App</h1>
      <IconButton iconName="burger-menu" />
    </header>
  );
};
