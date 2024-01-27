'use client';
import React from 'react';
import cn from 'classnames';
import { ReviewItem } from './ReviewItem';
import { useGetUserReviews } from '../hooks/useGetUserReviews';
import s from './UserReviews.module.scss';
import { mockUserReviewsTitle } from '../mocks';

interface UserReviewsProps {
  className?: string;
}

export const UserReviews: React.FC<UserReviewsProps> = (props) => {
  const { className } = props;

  const { userReviews } = useGetUserReviews();

  return (
    <div className={cn(s.UserReviews, className)}>
      <p className={s.UserReviews__title}>{mockUserReviewsTitle}</p>
      <ul className={s.UserReviews__list}>
        {userReviews?.map((el) => (
          <li key={el.id}>
            <ReviewItem
              fullName={el.fullName}
              date={el.date}
              rating={el.rating}
              reviewText={el.reviewText}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
