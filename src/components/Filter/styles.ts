import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin: 32px 0px;
`;

export const ChipContent = styled.TouchableOpacity.attrs({activeOpacity: 0.7})<{
  isActive: boolean;
}>`
  padding: 8px 16px;
  border: ${({theme, isActive}) =>
    isActive
      ? `1px solid ${theme.colors.primary}`
      : `0px solid ${theme.colors.primary}`};
  background: ${({theme, isActive}) =>
    isActive ? theme.colors.white : theme.colors.gray};
  border-radius: 24px;
  margin-right: 8px;
`;

export const ChipText = styled.Text<{isActive: boolean}>`
  font-family: ${({theme, isActive}) =>
    isActive ? theme.fonts.bold : theme.fonts.normal};
  color: ${({theme, isActive}) =>
    isActive ? theme.colors.primary : theme.colors.black};
  opacity: ${({isActive}) => (isActive ? 1 : 0.6)};
  font-size: ${({theme}) => theme.sizes.text}px;
`;
