import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  background: ${({theme}) => theme.colors.white};
  padding: 24px;
`;

export const Header = styled.TouchableOpacity.attrs({activeOpacity: 0.7})`
  margin-top: 44px;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.sizes.h2}px;
  margin-left: 16px;
`;

export const Subtitle = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.title}px;
  margin-bottom: 16px;
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
