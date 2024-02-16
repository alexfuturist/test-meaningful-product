'use client';
import React from 'react';
import s from './QuizSlide3.module.scss';
import { mockSpiritualChartData } from '../../../mocks';
import { SpiritualChart } from '@/entities/SpiritualChart';
import { Button } from '@/shared/ui/Button';
import { routeLinks } from '@/shared/const/routes';
import { useRouter } from 'next/navigation';
import { useQuizForm } from '@/shared/providers/QuizFormProvider';
import { submitQuizResults } from '@/pagesLayer/quiz/api/service';

export const QuizSlide3: React.FC = () => {
  const router = useRouter();

  const { formData } = useQuizForm();

  const handleSuccess = () => router.push(routeLinks['choose-plan']);

  const handleButtonClick = () => {
    submitQuizResults({ email: formData.email }, handleSuccess);
  };

  return (
    <div className={s.QuizSlide3}>
      <SpiritualChart date={mockSpiritualChartData.date} />
      <Button
        disabled={!formData.email}
        onClick={handleButtonClick}
      >
        Continue
      </Button>
    </div>
  );
};
