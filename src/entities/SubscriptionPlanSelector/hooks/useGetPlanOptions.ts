import { fetchMockPlanOptions } from '../api/service';
import { useEffect, useState } from 'react';
import { IPlanOption } from '../types';

export const useGetPlanOptions = () => {
  const [planOptions, setPlanOptions] = useState<IPlanOption[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchMockPlanOptions();
        setPlanOptions(data);
      } catch (error) {
        console.error('Error fetching plan options:', error);
      }
    };

    fetchData();
  }, []);

  return { planOptions };
};
