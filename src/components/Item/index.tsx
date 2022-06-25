import React from 'react';
import {SvgProps} from 'react-native-svg';
import {ItemProps} from '../../utils/schedule';
import {
  Container,
  DescriptionContent,
  Details,
  Time,
  TimeContent,
  Description,
} from './styles';

const Item = ({Icon, time, description, color, colorAccent}: ItemProps) => {
  return (
    <Container>
      <TimeContent>
        {Icon}
        <Time>{time}</Time>
      </TimeContent>
      <DescriptionContent color={color}>
        <Details color={colorAccent} />
        <Description>{description}</Description>
      </DescriptionContent>
    </Container>
  );
};

export default Item;
