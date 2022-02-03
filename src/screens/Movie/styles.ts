import styled from 'styled-components/native';

export const Wrapper = styled.View`
  position: relative;
  flex: 1;
  background-color: ${(p) => p.theme.colors.backgroungColor};
`;

export const WrapperScroll = styled.View`
  flex: 1;
`;

export const WrapperButton = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.responsive.wp('6%')}px;
  background-color: rgba(0, 0, 0, 0.6);
  width: ${(p) => p.theme.responsive.wp('11%')}px;
  height: ${(p) => p.theme.responsive.wp('11%')}px;
  position: absolute;
  z-index: 1;
  left: ${(p) => p.theme.responsive.wp('4%')}px;
  top: ${(p) => p.theme.responsive.wp('4%')}px;
`;

type TWrapperAdult = {
  color: string;
};

export const WrapperAdult = styled.View<TWrapperAdult>`
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.responsive.wp('0.5%')}px;
  background-color: ${(p) => p.color};
  width: ${(p) => p.theme.responsive.wp('8%')}px;
  height: ${(p) => p.theme.responsive.wp('8%')}px;
`;

export const WrapperInfo = styled.View`
  position: relative;
  padding: ${(p) => p.theme.responsive.wp('3%')}px;
`;

export const WrapperRanking = styled.View`
  position: absolute;
  align-items: center;
  justify-content: center;
  border-radius: ${(p) => p.theme.responsive.wp('10%')}px;
  background-color: rgba(0, 0, 0, 0.6);
  width: ${(p) => p.theme.responsive.wp('13%')}px;
  height: ${(p) => p.theme.responsive.wp('13%')}px;
  z-index: 1;
  right: ${(p) => p.theme.responsive.wp('2%')}px;
  top: ${(p) => p.theme.responsive.wp('-14%')}px;
`;

export const WrapperTopInfo = styled.View`
  align-items: center;
  flex-direction: row;
  padding: ${(p) => p.theme.responsive.wp('1.5%')}px 0;
`;

export const Image = styled.Image`
  width: ${(p) => p.theme.responsive.wp('100%')}px;
  height: ${(p) => p.theme.responsive.hp('75%')}px;
`;
