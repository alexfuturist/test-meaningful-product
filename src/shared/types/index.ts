import { IconName } from '../const/icons';

export type TIconName = keyof typeof IconName;

export type IIconWithText = {
  iconName: TIconName;
  text: string;
};

export type IPercentWithText = {
  percent: number;
  text: string;
};
