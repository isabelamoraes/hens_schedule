import React from 'react';
import Chip from './chip';
import {Container} from './styles';

const Filter = () => {
  return (
    <Container>
      <Chip value="Todos" isActive />
      <Chip value="Coleta de ovos" />
      <Chip value="Refeições" />
      <Chip value="Sono" />
    </Container>
  );
};

export default Filter;
