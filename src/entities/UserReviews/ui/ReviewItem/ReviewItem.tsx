'use client';
import cn from 'classnames';
import React from 'react';
import s from './ReviewItem.module.scss';
import { SvgIcon } from '@/shared/ui/SvgIcon';
import dayjs from 'dayjs';

interface ReviewItemProps {
  className?: string;
  fullName: string;
  date: string;
  rating: number;
  reviewText: string;
}

export const ReviewItem: React.FC<ReviewItemProps> = (props) => {
  const { className, fullName, date, rating, reviewText } = props;

  const parsedDate = dayjs(date);
  const formattedDate = parsedDate.format('D MMMM YYYY');

  return (
    <div className={cn(s.ReviewItem, className)}>
      <div className={s.ReviewItem__top}>
        <div className={s['ReviewItem__top-left']}>
          <p className={s['ReviewItem__full-name']}>{fullName}</p>
          <p className={s['ReviewItem__date']}>{formattedDate}</p>
        </div>
        <div className={s['ReviewItem__top-right']}>
          {Array(rating)
            .fill(null)
            .map((_, index) => (
              <SvgIcon
                name="star"
                key={index}
              />
            ))}
        </div>
      </div>
      <p className={s.ReviewItem__text}>{reviewText}</p>
    </div>
  );
};
