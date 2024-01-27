'use client';
import React from 'react';
import cn from 'classnames';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import s from './SpiritualPlanProgressbar.module.scss';
import { mockSpiritualPlanTitle } from '../mocks';

interface SpiritualPlanProgressbarProps {
  className?: string;
}

export const SpiritualPlanProgressbar: React.FC<SpiritualPlanProgressbarProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.SpiritualPlanProgressbar, className)}>
      <h2 className={s.SpiritualPlanProgressbar__title}>{mockSpiritualPlanTitle}</h2>
      <SvgIcon name="spiritual-progressbar" />
    </div>
  );
};
