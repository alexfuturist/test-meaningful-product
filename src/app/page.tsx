'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { routeLinks } from '@/shared/const/routes';

const HomePage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push(`${routeLinks.quiz}/1`);
  }, [router]);

  return <></>;
};

export default HomePage;
