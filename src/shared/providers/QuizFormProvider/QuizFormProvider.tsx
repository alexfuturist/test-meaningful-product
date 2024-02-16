import React, { createContext, useState, ReactNode } from 'react';

interface IQuizFormProviderProps {
  children: ReactNode;
}

export interface IFormData {
  email: string;
  selectedPlan: string;
}

export interface IQuizFormContextProps {
  formData: IFormData;
  setEmail: (email: string) => void;
  setSelectedPlan: (selectedPlan: string) => void;
}

export const QuizFormContext = createContext<IQuizFormContextProps>({
  formData: { email: '', selectedPlan: '' },
  setEmail: () => {},
  setSelectedPlan: () => {},
});

export const QuizFormProvider: React.FC<IQuizFormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<IFormData>({ email: '', selectedPlan: '' });

  const setEmail = (email: string): void => {
    setFormData((prev) => ({ ...prev, email: email }));
  };

  const setSelectedPlan = (selectedPlan: string): void => {
    setFormData((prev) => ({ ...prev, selectedPlan: selectedPlan }));
  };

  return <QuizFormContext.Provider value={{ formData, setEmail, setSelectedPlan }}>{children}</QuizFormContext.Provider>;
};
