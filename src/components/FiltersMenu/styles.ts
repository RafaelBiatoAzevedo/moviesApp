import styled from 'styled-components/native';

export const Wrapper = styled.View`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  min-height: ${(p) => p.theme.responsive.hp('54%')}px;
  padding: 0 ${(p) => p.theme.responsive.wp('17%')}px;
  z-index: 5000;
`;

export const WrapperDropDown = styled.View`
  padding: ${(p) => p.theme.responsive.wp('1.5%')}px 0;
`;

export const WrapperSort = styled.View`
  padding: ${(p) => p.theme.responsive.wp('1.5%')}px 0;
  width: 100%;
`;

export const WrapperButtons = styled.View`
  flex-direction: row;
  margin-top: ${(p) => p.theme.responsive.wp('1%')}px;
  width: 100%;
`;
