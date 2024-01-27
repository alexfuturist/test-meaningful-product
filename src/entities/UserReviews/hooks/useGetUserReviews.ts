import { fetchMockUserReviews } from '../api/service';
import { useEffect, useState } from 'react';
import { IUserReview } from '../types';

export const useGetUserReviews = () => {
  const [userReviews, setUserReviews] = useState<IUserReview[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockUserReviews();
        setUserReviews(data);
      } catch (error) {
        console.error('Error fetching user reviews:', error);
      }
    };

    fetchData();
  }, []);

  return { userReviews };
};
