import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TRootStackParamList } from '~/types/TRootStackParamList';

import { Home } from '~/screens/Home';
import { Movie } from '~/screens/Movie';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const Routes: FC = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Movie" component={Movie} />
    </Stack.Navigator>
  );
};
