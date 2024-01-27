'use client';
import React, { useEffect } from 'react';
import s from './QuizSlide1.module.scss';
import { SpiritualPlanProgressbar } from '@/entities/SpiritualPlanProgressbar';
import { SpiritualPlanSteps } from '@/entities/SpiritualPlanSteps';
import { useRouter } from 'next/navigation';
import { routeLinks } from '@/shared/const/routes';

export const QuizSlide1: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push(`${routeLinks.quiz}/2`);
    }, 2000);
  }, [router]);

  return (
    <div className={s.QuizSlide1}>
      <SpiritualPlanProgressbar />
      <SpiritualPlanSteps />
    </div>
  );
};
