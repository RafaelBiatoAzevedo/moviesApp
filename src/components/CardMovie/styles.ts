import styled from 'styled-components/native';

export const Wrapper = styled.Pressable`
  border-radius: 3px;
  margin: 5px;
  width: ${(p) => p.theme.responsive.wp('30%')}px;
  height: ${(p) => p.theme.responsive.wp('55%')}px;
`;

export const Image = styled.Image`
  border-radius: 3px;
  border: solid #fff 1px;
  width: 100%;
  height: 80%;
`;
