import styled from 'styled-components/native';

export const Wrapper = styled.Pressable`
  border-radius: ${(p) => p.theme.responsive.wp('1%')}px;
  height: ${(p) => p.theme.responsive.wp('55%')}px;
  margin: ${(p) => p.theme.responsive.wp('1.5%')}px;
  width: ${(p) => p.theme.responsive.wp('30%')}px;
`;

export const Image = styled.Image`
  border: solid ${(p) => p.theme.colors.primary} 1px;
  border-radius: 3px;
  height: 80%;
  width: 100%;
`;
