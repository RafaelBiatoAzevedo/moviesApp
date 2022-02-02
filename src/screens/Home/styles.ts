import styled from 'styled-components/native';

export const WrapperScroll = styled.ScrollView``;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.colors.backgroungColor};
  padding: 0 ${(p) => p.theme.responsive.wp('2%')}px;
`;
