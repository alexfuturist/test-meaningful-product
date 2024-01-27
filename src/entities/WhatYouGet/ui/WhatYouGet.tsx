'use client';
import React from 'react';
import cn from 'classnames';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import { mockWhatYouGetOptions, mockWhatYouGetTitle } from '../mocks';
import s from './WhatYouGet.module.scss';

interface WhatYouGetProps {
  className?: string;
}

export const WhatYouGet: React.FC<WhatYouGetProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.WhatYouGet, className)}>
      <h2 className={s.WhatYouGet__title}>{mockWhatYouGetTitle}</h2>
      <ul className={cn(s.WhatYouGet__list, className)}>
        {mockWhatYouGetOptions.map((el, index) => (
          <li
            key={index}
            className={s.WhatYouGet__item}
          >
            <div className={s.WhatYouGet__icon}>
              <SvgIcon name={el.iconName} />
            </div>
            <p className={s.WhatYouGet__text}>{el.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
