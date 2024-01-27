import { mockUserReviews } from '../mocks';
import { IUserReview } from '../types';

export const fetchMockUserReviews = (): Promise<IUserReview[]> => {
  return new Promise((resolve) => {
    resolve(mockUserReviews);
  });
};
