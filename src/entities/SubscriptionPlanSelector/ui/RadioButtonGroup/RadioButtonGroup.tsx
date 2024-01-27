'use client';
import React from 'react';
import cn from 'classnames';
import { RadioButton } from '../RadioButton';
import { IPlanOption } from '../../types';
import s from './RadioButtonGroup.module.scss';

interface RadioButtonGroupProps {
  className?: string;
  options: IPlanOption[];
  selectedValue: string | null;
  onSelect: (value: string) => void;
}

export const RadioButtonGroup: React.FC<RadioButtonGroupProps> = (props) => {
  const { className, options, selectedValue, onSelect } = props;

  const handleOptionChange = (value: string) => {
    onSelect(value);
  };

  return (
    <ul className={cn(s.RadioButtonGroup, className)}>
      {options?.map((el) => (
        <li key={el.value}>
          <RadioButton
            isChecked={selectedValue === el.value}
            isMostPopular={el.isMostPopular}
            value={el.value}
            label={el.label}
            price={el.price}
            onChange={handleOptionChange}
          />
        </li>
      ))}
    </ul>
  );
};
