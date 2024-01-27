'use client';
import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import s from './SpiritualPlanSteps.module.scss';
import { spiritualPlanStepsOptions } from '../const';

interface IconButtonProps {
  className?: string;
}

export const SpiritualPlanSteps: React.FC<IconButtonProps> = (props) => {
  const { className } = props;

  const [loadingIndex, setLoadingIndex] = useState(-1);

  useEffect(() => {
    const intervals = spiritualPlanStepsOptions.map((_, index) =>
      setTimeout(
        () => {
          setLoadingIndex(index);
        },
        (index + 1) * 400,
      ),
    );

    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <ul className={cn(s.SpiritualPlanSteps, className)}>
      {spiritualPlanStepsOptions.map((el, index) => (
        <li
          key={index}
          className={s.SpiritualPlanSteps__item}
        >
          <div className={s.SpiritualPlanSteps__icon}>{loadingIndex >= index && <SvgIcon name={el.iconName} />}</div>
          <p className={s.SpiritualPlanSteps__text}>{el.text}</p>
        </li>
      ))}
    </ul>
  );
};
