'use client';
import React from 'react';
import cn from 'classnames';
import { useGetPlanOptions } from '../hooks/useGetPlanOptions';
import { Button } from '@/shared/ui/Button';
import { RadioButtonGroup } from './RadioButtonGroup';
import s from './SubscriptionPlanSelector.module.scss';
import { mockPlanTitle } from '../mocks';

interface SubscriptionPlanSelectorProps {
  className?: string;
  selectedValue: string | null;
  onSelect: (value: string) => void;
  onSubmit: () => void;
}

export const SubscriptionPlanSelector: React.FC<SubscriptionPlanSelectorProps> = (props) => {
  const { className, selectedValue, onSelect, onSubmit } = props;

  const { planOptions } = useGetPlanOptions();

  return (
    <div className={cn(s.SubscriptionPlanSelector, className)}>
      <h2 className={s.SubscriptionPlanSelector__title}>{mockPlanTitle}</h2>
      <RadioButtonGroup
        options={planOptions}
        selectedValue={selectedValue}
        onSelect={onSelect}
      />
      <Button
        disabled={!selectedValue}
        onClick={() => onSubmit()}
      >
        Get my plan
      </Button>
      <p className={s['SubscriptionPlanSelector__details']}>
        You are enrolling in a 3-monthly subscription to{' '}
        <a
          href="https://awesomeapp.com/subscription"
          target="_blank"
          rel="noopener noreferrer"
          className={s['SubscriptionPlanSelector__details-link']}
        >
          https://awesomeapp.com/subscription
        </a>{' '}
        with the discount price $29.99.You agree that the plan you selected will automatically be extended at the full price
        for successive renewal periods and you will be charged $99.99 every 3 months until you cancel the subscription.
        Payments will be charged from the card you specified here. You can cancel your subscription by contacting our
        customer support team via email at support@awesomeapp.com Subscription Policy. The charge will appear on your bill as
        &quot;awesomeapp&quot;
      </p>
    </div>
  );
};
