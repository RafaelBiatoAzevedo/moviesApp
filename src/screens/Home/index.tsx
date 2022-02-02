import React, { FC } from 'react';
import { TopMenu } from '~/components/TopMenu';

import { Wrapper } from './styles';

export const Home: FC = () => {
  return (
    <Wrapper>
      <TopMenu />
    </Wrapper>
  );
};
