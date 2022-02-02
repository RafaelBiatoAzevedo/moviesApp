import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import { ThemeProvider } from 'styled-components';
import { theme } from '~/styles/theme';
import { store } from '~/redux/store';

export const AppProvider: FC = ({ children }) => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
      </NavigationContainer>
    </Provider>
  );
};
