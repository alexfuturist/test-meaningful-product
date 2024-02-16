'use client';
import cn from 'classnames';
import React from 'react';
import s from './RadioButton.module.scss';

interface RadioButtonProps {
  className?: string;
  isChecked?: boolean;
  isMostPopular: boolean;
  label: string;
  value: string;
  price: number;
  onChange: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = (props) => {
  const { className, isChecked = false, isMostPopular, label, value, price, onChange } = props;

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label className={cn(s.RadioButton, { [s['RadioButton--checked']]: isChecked }, className)}>
      <input
        type="radio"
        value={value}
        checked={isChecked}
        onChange={handleRadioChange}
        className="visually-hidden"
      />
      {isMostPopular && <p className={s.RadioButton__top}>MOST POPULAR</p>}
      <div className={s.RadioButton__content}>
        <div className={s['RadioButton__content-left']}>
          <span className={s['RadioButton__label']}>{label}</span>
        </div>
        <div className={s['RadioButton__content-right']}>
          <span className={s['RadioButton__currency-symbol']}>$</span>
          <span className={s['RadioButton__price']}>{price}</span>
        </div>
      </div>
    </label>
  );
};
