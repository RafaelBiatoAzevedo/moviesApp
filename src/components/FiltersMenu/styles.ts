import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0 ${(p) => p.theme.responsive.wp('3%')}px;

  min-height: 380px
  z-index: 5000;
`;

export const WrapperDropDown = styled.View`
  padding: ${(p) => p.theme.responsive.wp('2%')}px 0;
`;

export const WrapperSort = styled.View`
  padding: ${(p) => p.theme.responsive.wp('2%')}px 0;
  width: 100%;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  width: 100%;
  margin-top: ${(p) => p.theme.responsive.wp('1%')}px;
`;
