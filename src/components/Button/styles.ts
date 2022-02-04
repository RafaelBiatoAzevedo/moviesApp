import styled, { css } from 'styled-components/native';

type TWrapper = {
  width?: string;
  flex?: number;
  mRight?: string;
  mLeft?: string;
  mBottom?: string;
  mTop?: string;
  backgroundColor?: string;
  withBorder?: boolean;
  flexDirection: string;
  paddingY: string;
  paddingX: string;
};

export const Wrapper = styled.Pressable<TWrapper>`
  flex-direction: ${(p) => p.flexDirection};
  background-color: ${(p) => p.backgroundColor};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  padding: ${(p) => p.theme.responsive.wp(p.paddingY)}px
    ${(p) => p.theme.responsive.wp(p.paddingX)}px;

  ${(p) =>
    p.withBorder &&
    css`
      border-style: solid;
      border-width: 1px;
      border-color: ${() => p.theme.colors.primary};
    `}

  ${(p) =>
    p.mRight &&
    css`
      margin-right: ${p.theme.responsive.wp(p.mRight)}px;
    `}

  ${(p) =>
    p.mLeft &&
    css`
      margin-left: ${p.theme.responsive.wp(p.mLeft)}px;
    `}

  ${(p) =>
    p.mBottom &&
    css`
      margin-bottom: ${p.theme.responsive.wp(p.mBottom)}px;
    `}

    ${(p) =>
    p.mTop &&
    css`
      margin-top: ${p.theme.responsive.wp(p.mTop)}px;
    `}

  ${(p) =>
    p.flex &&
    css`
      flex: ${p.flex};
    `}

  ${(p) =>
    p.width &&
    css`
      width: ${p.width};
    `}
`;
