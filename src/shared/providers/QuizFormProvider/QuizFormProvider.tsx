import React, { createContext, useState, ReactNode } from 'react';

interface IQuizFormProviderProps {
  children: ReactNode;
}

export interface IFormData {
  email: string;
  selected_plan: string;
}

export interface IQuizFormContextProps {
  formData: IFormData;
  setEmail: (email: string) => void;
  setSelectedPlan: (selected_plan: string) => void;
}

export const QuizFormContext = createContext<IQuizFormContextProps>({
  formData: { email: '', selected_plan: '' },
  setEmail: () => {},
  setSelectedPlan: () => {},
});

export const QuizFormProvider: React.FC<IQuizFormProviderProps> = ({ children }) => {
  const [formData, setFormData] = useState<IFormData>({ email: '', selected_plan: '' });

  const setEmail = (email: string): void => {
    setFormData((prev) => ({ ...prev, email: email }));
  };

  const setSelectedPlan = (selected_plan: string): void => {
    setFormData((prev) => ({ ...prev, selected_plan: selected_plan }));
  };

  return <QuizFormContext.Provider value={{ formData, setEmail, setSelectedPlan }}>{children}</QuizFormContext.Provider>;
};
