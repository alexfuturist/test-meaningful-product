'use client';
import React from 'react';
import s from './QuizSlide3.module.scss';
import { mockSpiritualChartData } from '../../../mocks';
import { SpiritualChart } from '@/entities/SpiritualChart';
import { Button } from '@/shared/ui/Button';
import { routeLinks } from '@/shared/const/routes';
import { useRouter } from 'next/navigation';
import { useQuizForm } from '@/shared/providers/QuizFormProvider';
import { IFormData } from '@/shared/providers/QuizFormProvider/QuizFormProvider';

export const QuizSlide3: React.FC = () => {
  const router = useRouter();

  const { formData } = useQuizForm();

  const handleSubmit = async (formData: IFormData) => {
    const response = await fetch('/api/quiz-results', {
      method: 'POST',
      body: JSON.stringify(formData.email),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('quiz-results data:', data);

      router.push(routeLinks['choose-plan']);
    } else {
      console.error('Error submitting results');
    }
  };

  const handleButtonClick = () => {
    handleSubmit(formData);
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
