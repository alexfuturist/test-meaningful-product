import { mockPlanOptions } from '../mocks';
import { IPlanOption } from '../types';

export const fetchMockPlanOptions = (): Promise<IPlanOption[]> => {
  return new Promise((resolve) => {
    resolve(mockPlanOptions);
  });
};
