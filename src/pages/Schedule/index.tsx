import {useNavigation} from '@react-navigation/native';
import {CaretLeft} from 'phosphor-react-native';
import React from 'react';
import {FlatList} from 'react-native';
import Filter from '../../components/Filter';
import Item from '../../components/Item';
import {schedule} from '../../utils/schedule';
import {Container, Header, Subtitle, Title} from './styles';

const Schedule = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container>
      <FlatList
        data={schedule}
        keyExtractor={item => item.time}
        ListHeaderComponent={
          <>
            <Header onPress={handleBack}>
              <CaretLeft weight="bold" />
              <Title>Agenda das Galinhas</Title>
            </Header>
            <Filter />
            <Subtitle>Atividades do dia</Subtitle>
          </>
        }
        renderItem={({item}) => (
          <Item
            time={item.time}
            description={item.description}
            color={item.color}
            colorAccent={item.colorAccent}
            Icon={item.Icon}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};

export default Schedule;
