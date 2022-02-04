import styled from 'styled-components/native';

export const Wrapper = styled.Pressable`
  align-items: center;
  border: solid ${(p) => p.theme.colors.primary} 1px;
  border-radius: ${(p) => p.theme.responsive.wp('1%')}px;
  justify-content: center;
  margin: ${(p) => p.theme.responsive.wp('1.5%')}px;
  height: ${(p) => p.theme.responsive.wp('44%')}px;
  width: ${(p) => p.theme.responsive.wp('29%')}px;
`;
