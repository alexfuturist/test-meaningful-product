'use client';
import React from 'react';
import { TIconName } from '@/shared/types';
import { IconName } from '@/shared/const/icons';
import ArrowLeftIcon from './../../assets/icons/arrow-left.svg';
import BurgerMenuIcon from './../../assets/icons/burger-menu.svg';
import CheckIcon from './../../assets/icons/check.svg';
import StarIcon from './../../assets/icons/star.svg';
import CircleCheckIcon from './../../assets/icons/circle-check.svg';
import GridIcon from './../../assets/icons/grid.svg';
import TextIcon from './../../assets/icons/text.svg';
import AiIcon from './../../assets/icons/ai.svg';
import SpiritualChartIcon from './../../assets/icons/spiritual-chart.svg';
import SpiritualProgressbarIcon from './../../assets/icons/spiritual-progressbar.svg';

interface IconProps {
  name: TIconName;
  className?: string;
}

export const SvgIcon: React.FC<IconProps> = ({ className, name }) => {
  if (name === IconName['arrow-left']) {
    return <ArrowLeftIcon className={className} />;
  }
  if (name === IconName['burger-menu']) {
    return <BurgerMenuIcon className={className} />;
  }
  if (name === IconName['check']) {
    return <CheckIcon className={className} />;
  }
  if (name === IconName['star']) {
    return <StarIcon className={className} />;
  }
  if (name === IconName['circle-check']) {
    return <CircleCheckIcon className={className} />;
  }
  if (name === IconName['grid']) {
    return <GridIcon className={className} />;
  }
  if (name === IconName['text']) {
    return <TextIcon className={className} />;
  }
  if (name === IconName['ai']) {
    return <AiIcon className={className} />;
  }
  if (name === IconName['spiritual-chart']) {
    return <SpiritualChartIcon className={className} />;
  }
  if (name === IconName['spiritual-progressbar']) {
    return <SpiritualProgressbarIcon className={className} />;
  }
};
