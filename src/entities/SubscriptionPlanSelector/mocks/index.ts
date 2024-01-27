import { IPlanOption } from '../types';

export const mockPlanTitle = 'Choose your plan';

export const mockPlanOptions: IPlanOption[] = [
  { value: '1-month', label: '1-Month Plan', price: 10, isMostPopular: false },
  { value: '3-month', label: '3-Month Plan', price: 30, isMostPopular: true },
  { value: '6-month', label: '6-Month Plan', price: 60, isMostPopular: false },
];
