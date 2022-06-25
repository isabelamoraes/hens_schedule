import React from 'react';
import {ChipContent, ChipText} from './styles';

type Props = {
  isActive?: boolean;
  value: string;
};

const Chip = ({isActive = false, value}: Props) => {
  return (
    <ChipContent isActive={isActive}>
      <ChipText isActive={isActive}>{value}</ChipText>
    </ChipContent>
  );
};

export default Chip;
