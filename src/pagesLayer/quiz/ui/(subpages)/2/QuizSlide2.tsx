'use client';
import React from 'react';
import cn from 'classnames';
import s from './QuizSlide2.module.scss';
import { mockQuizSlide2Title } from '@/pagesLayer/quiz/mocks';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useRouter } from 'next/navigation';
import { routeLinks } from '@/shared/const/routes';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import { schema } from './QuizSlide2.schema';
import { useQuizForm } from '@/shared/providers/QuizFormProvider';

interface IconButtonProps {
  className?: string;
  date: string;
}

export const QuizSlide2: React.FC<IconButtonProps> = (props) => {
  const { className } = props;

  const router = useRouter();

  const { setEmail, formData } = useQuizForm();

  const { control, handleSubmit, formState } = useForm({
    defaultValues: {
      email: formData.email,
    },
    mode: 'onTouched',
    resolver: yupResolver(schema),
  });

  const { isValid } = formState;

  const onSubmit = (data: { email: string }) => {
    setEmail(data.email);
    router.push(`${routeLinks.quiz}/3`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(s.QuizSlide2, className)}
      noValidate
    >
      <div>
        <h2 className={s.QuizSlide2__title}>{mockQuizSlide2Title}</h2>
        <Controller
          name="email"
          control={control}
          render={({ field: { onChange, onBlur, name, value }, fieldState: { error } }) => (
            <Input
              name={name}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              error={error}
              label="Email"
              type="email"
            />
          )}
        />
      </div>
      <Button
        disabled={!isValid}
        type="submit"
      >
        Continue
      </Button>
    </form>
  );
};
