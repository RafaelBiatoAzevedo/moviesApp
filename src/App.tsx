import React, { FC } from 'react';

import { AppProvider } from '~/hooks';
import { Routes } from '~/routes';

export const App: FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};
