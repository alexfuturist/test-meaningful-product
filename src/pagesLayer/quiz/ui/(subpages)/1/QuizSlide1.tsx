'use client';
import React, { useEffect } from 'react';
import cn from 'classnames';
import s from './QuizSlide1.module.scss';
import { SpiritualPlanProgressbar } from '@/entities/SpiritualPlanProgressbar';
import { SpiritualPlanSteps } from '@/entities/SpiritualPlanSteps';
import { useRouter } from 'next/navigation';
import { routeLinks } from '@/shared/const/routes';

interface IconButtonProps {
  className?: string;
}

export const QuizSlide1: React.FC<IconButtonProps> = (props) => {
  const { className } = props;

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`${routeLinks.quiz}/2`);
    }, 2000);
  }, [router]);

  return (
    <div className={cn(s.QuizSlide1, className)}>
      <SpiritualPlanProgressbar />
      <SpiritualPlanSteps />
    </div>
  );
};
