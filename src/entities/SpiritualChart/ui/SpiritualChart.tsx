'use client';
import React from 'react';
import cn from 'classnames';
import dayjs from 'dayjs';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import s from './SpiritualChart.module.scss';

interface IconButtonProps {
  className?: string;
  date: string;
}

export const SpiritualChart: React.FC<IconButtonProps> = (props) => {
  const { className, date } = props;

  const formattedDate = dayjs(date);

  const month = formattedDate.format('MMM');
  const day = formattedDate.date();
  const year = formattedDate.year();

  return (
    <div className={cn(s.SpiritualChart, className)}>
      <h2 className={s.SpiritualChart__title}>See your Spiritual Growth progress by {`${month} ${day}, ${year}`}</h2>
      <div className={s.SpiritualChart__chart}>
        <div className={s.SpiritualChart__date}>
          <p className={s['SpiritualChart__date-top']}>{`${month} ${day}`}</p>
          <p className={s['SpiritualChart__date-bottom']}>{year}</p>
        </div>
        <SvgIcon name="spiritual-chart" />
      </div>
    </div>
  );
};
