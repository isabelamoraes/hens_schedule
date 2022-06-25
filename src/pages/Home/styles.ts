import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background: ${({theme}) => theme.colors.primary};
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.sizes.h1}px;
  width: 300px;
  text-align: center;
  margin-top: 44px;
`;

export const Image = styled.Image`
  width: 205px;
  height: 267px;
`;

export const Box = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 270px;
  background: ${({theme}) => theme.colors.box};
  padding: 16px;
  border-radius: 36px;
  margin-bottom: 44px;

  align-items: center;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.white};
  font-size: ${({theme}) => theme.sizes.h3}px;
  text-align: center;

  margin-bottom: 16px;
`;
