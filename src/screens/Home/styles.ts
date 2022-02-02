import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${(p) => p.theme.colors.backgroungColor};
  padding: ${(p) => p.theme.responsive.wp('3%')}px;
`;
