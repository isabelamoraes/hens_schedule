import React from 'react';
import {Box, Container, Description, Image, Title} from './styles';

import Hen from '../../assets/hen.png';
import {ArrowRight} from 'phosphor-react-native';
import {useTheme} from 'styled-components';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleSchedule = () => {
    navigation.navigate('Schedule');
  };

  return (
    <Container>
      <Title>Agenda das galinhas</Title>
      <Image source={Hen} />
      <Box onPress={handleSchedule}>
        <Description>
          Confira os horários de alimentação, descanso e coleta de ovos das suas
          galinhas
        </Description>

        <ArrowRight color={theme.colors.white} weight="bold" />
      </Box>
    </Container>
  );
};

export default Home;
