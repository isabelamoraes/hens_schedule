import React from 'react';
import {useTheme} from 'styled-components';

import {CookingPot, Egg, Moon, Sun} from 'phosphor-react-native';

export interface ItemProps {
  time: string;
  description: string;
  color: string;
  colorAccent: string;
  Icon: JSX.Element;
}

export const schedule: ItemProps[] = [
  {
    time: '17:00',
    description: 'Adormecer',
    color: 'pink',
    colorAccent: 'pinkAccent',
    Icon: <Moon weight="bold" />,
  },
  {
    time: '16:00',
    description: 'Refeição',
    color: 'purple',
    colorAccent: 'purpleAccent',
    Icon: <CookingPot weight="bold" />,
  },
  {
    time: '15:00',
    description: 'Coleta de ovos',
    color: 'yellow',
    colorAccent: 'yellowAccent',
    Icon: <Egg weight="bold" />,
  },
  {
    time: '11:00',
    description: 'Refeição',
    color: 'purple',
    colorAccent: 'purpleAccent',
    Icon: <CookingPot weight="bold" />,
  },
  {
    time: '07:00',
    description: 'Coleta de ovos',
    color: 'yellow',
    colorAccent: 'yellowAccent',
    Icon: <Egg weight="bold" />,
  },
  {
    time: '06:00',
    description: 'Refeição',
    color: 'purple',
    colorAccent: 'purpleAccent',
    Icon: <CookingPot weight="bold" />,
  },
  {
    time: '05:00',
    description: 'Despertar',
    color: 'pink',
    colorAccent: 'pinkAccent',
    Icon: <Sun weight="bold" />,
  },
];
