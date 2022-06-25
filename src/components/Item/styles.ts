import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 16px;
  flex: 1;
`;

export const TimeContent = styled.View`
  flex-direction: row;
  margin-right: 24px;
`;

export const Time = styled.Text`
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
  font-size: ${({theme}) => theme.sizes.text}px;
  margin-left: 16px;
`;

export const DescriptionContent = styled.View<{color: string}>`
  flex: 1;
  background: ${({theme, color}) => theme.colors[color]};
  padding: 16px;
  border-radius: 24px;
  align-items: center;
  flex-direction: row;
`;

export const Details = styled.View<{color: string}>`
  background: ${({theme, color}) => theme.colors[color]};
  width: 6px;
  height: 36px;
  margin-right: 16px;
  border-radius: 3px;
`;

export const Description = styled.Text`
  font-family: ${({theme}) => theme.fonts.normal};
  color: ${({theme}) => theme.colors.black};
  font-size: ${({theme}) => theme.sizes.text}px;
`;
