import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import { theme } from '~/styles/theme';

export const AppProvider: FC = ({ children }) => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
};
