import styled from 'styled-components/native';

export const Wrapper = styled.Pressable`
  background-color: ${(p) => p.theme.colors.primary};
  width: ${(p) => p.theme.responsive.wp('10%')}px;
  height: ${(p) => p.theme.responsive.wp('20%')}px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;
