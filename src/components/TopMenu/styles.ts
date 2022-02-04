import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding: ${(p) => p.theme.responsive.wp('1%')}px 0;

  width: 100%;

  z-index: 2;
`;

export const WrapperTitle = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
export const WrapperFilters = styled.View`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: ${(p) => p.theme.responsive.wp('1%')}px 0;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  border-style: solid;
  border-bottom-width: 1px;
  border-color: ${(p) => p.theme.colors.primary};
  color: ${(p) => p.theme.colors.primary};

  height: ${(p) => p.theme.responsive.wp('7%')}px;
  padding: ${(p) => p.theme.responsive.wp('1%')}px;
  margin: 0 ${(p) => p.theme.responsive.wp('5%')}px;
`;
