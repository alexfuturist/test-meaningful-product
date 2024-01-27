import { useContext } from 'react';
import { QuizFormContext, IQuizFormContextProps } from './QuizFormProvider';

export const useQuizForm = (): IQuizFormContextProps => {
  return useContext(QuizFormContext);
};
