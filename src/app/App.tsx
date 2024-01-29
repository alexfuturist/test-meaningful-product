'use client';

import React from 'react';
import { QuizFormProvider } from '@/shared/providers/QuizFormProvider';

interface AppProps {
  children: React.ReactNode;
}

export const App: React.FC<AppProps> = ({ children }) => {
  return <QuizFormProvider>{children}</QuizFormProvider>;
};
