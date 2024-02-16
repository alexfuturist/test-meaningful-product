import { Header } from '@/shared/ui/Header';
import { SubscriptionPlanSelector } from '@/entities/SubscriptionPlanSelector';
import { UserReviews } from '@/entities/UserReviews';
import { WhatYouGet } from '@/entities/WhatYouGet';
import { AchievementStories } from '@/entities/AchievementStories';
import s from './ChoosePlanPage.module.scss';
import { routeLinks } from '@/shared/const/routes';
import { useRouter } from 'next/navigation';
import { useQuizForm } from '@/shared/providers/QuizFormProvider';
import { submitPlan } from '../api/service';

export const ChoosePlanPage: React.FC = () => {
  const router = useRouter();

  const { formData, setSelectedPlan } = useQuizForm();

  const handleSubmit = () => {
    submitPlan({ selectedPlan: formData.selectedPlan });
  };

  const handleBack = () => {
    router.push(`${routeLinks.quiz}/3`);
  };

  const planSelectionElement = (
    <SubscriptionPlanSelector
      selectedValue={formData.selectedPlan}
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
