'use client';
import React from 'react';
import { FieldError } from 'react-hook-form';
import cn from 'classnames';
import s from './Input.module.scss';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  withHelperText?: boolean;
  value?: string;
  error?: FieldError;
}

export const Input: React.FC<InputProps> = (props) => {
  const {
    className,
    label,
    withHelperText = true,
    autoComplete = 'off',
    name,
    value,
    onChange,
    error,
    disabled,
    ...restProps
  } = props;

  return (
    <div className={cn(s['Input'], className)}>
      <div
        className={cn(s['Input__container'], {
          [s['Input__container--error']]: error,
        })}
      >
        {!!label && (
          <label
            htmlFor={name}
            className={cn(s['Input__label'], {
              [s['Input__label--disabled']]: disabled,
            })}
          >
            {label}
          </label>
        )}
        <input
          className={s['Input__field']}
          autoComplete={autoComplete}
          onChange={onChange}
          value={value}
          id={name}
          disabled={disabled}
          {...restProps}
        />
      </div>
      {withHelperText && error && <p className={s['Input__helper-text']}>{error?.message}</p>}
    </div>
  );
};
