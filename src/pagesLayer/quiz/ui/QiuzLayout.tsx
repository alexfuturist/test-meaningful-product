'use client';
import { Header } from '@/shared/ui/Header';
import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import s from './QiuzLayout.module.scss';
import { routeLinks } from '@/shared/const/routes';
import { getLastUrlSegment } from '@/shared/lib/utils/getLastUrlSegment';

interface QiuzLayoutProps {
  children: React.ReactNode;
}

export const QiuzLayout: React.FC<QiuzLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const currentSlide = getLastUrlSegment(pathname);

  const handleBack = () => {
    if (Number(currentSlide) > 1) {
      router.push(`${routeLinks.quiz}/${Number(currentSlide) - 1}`);
    }
  };

  return (
    <>
      <Header onBackButtonClick={handleBack} />
      <main className={s.QiuzLayout__content}>{children}</main>
    </>
  );
};
