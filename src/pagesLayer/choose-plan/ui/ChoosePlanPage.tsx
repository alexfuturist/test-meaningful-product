import { Header } from '@/shared/ui/Header';
import { SubscriptionPlanSelector } from '@/entities/SubscriptionPlanSelector';
import { UserReviews } from '@/entities/UserReviews';
import { WhatYouGet } from '@/entities/WhatYouGet';
import { AchievementStories } from '@/entities/AchievementStories';
import s from './ChoosePlanPage.module.scss';
import { routeLinks } from '@/shared/const/routes';
import { useRouter } from 'next/navigation';
import { useQuizForm } from '@/shared/providers/QuizFormProvider';

export const ChoosePlanPage: React.FC = () => {
  const router = useRouter();

  const { formData, setSelectedPlan } = useQuizForm();

  const handleSubmit = async () => {
    const response = await fetch('/api/choose-plan', {
      method: 'POST',
      body: JSON.stringify({ selected_plan: formData.selected_plan }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      const data = await response.json();
      console.log('quiz-results data:', data);
    } else {
      console.error('Error submitting results');
    }
  };

  const handleBack = () => {
    router.push(`${routeLinks.quiz}/3`);
  };

  const planSelectionElement = (
    <SubscriptionPlanSelector
      selectedValue={formData.selected_plan}
      onSelect={setSelectedPlan}
      onSubmit={handleSubmit}
    />
  );

  return (
    <>
      <Header onBackButtonClick={handleBack} />
      <main className={s.ChoosePlanPage__content}>
        {planSelectionElement}
        <WhatYouGet />
        <AchievementStories />
        <UserReviews />
        {planSelectionElement}
      </main>
    </>
  );
};
