'use client';
import React from 'react';
import cn from 'classnames';
import { mockAchievementOptions, mockAchievementTitle } from '../mocks';
import s from './AchievementStories.module.scss';

interface AchievementStoriesProps {
  className?: string;
}

export const AchievementStories: React.FC<AchievementStoriesProps> = (props) => {
  const { className } = props;

  return (
    <div className={cn(s.AchievementStories, className)}>
      <h2 className={s.AchievementStories__title}>{mockAchievementTitle}</h2>
      <ul className={cn(s.AchievementStories__list, className)}>
        {mockAchievementOptions.map((el, index) => (
          <li
            key={index}
            className={s.AchievementStories__item}
          >
            <span className={s.AchievementStories__percent}>{el.percent}%</span>
            <p className={s.AchievementStories__text}>{el.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
