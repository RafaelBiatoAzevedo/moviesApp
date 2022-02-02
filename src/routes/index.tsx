import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { TRootStackParamList } from '~/types/TRootStackParamList';

import { Home } from '~/screens/Home';

const Stack = createNativeStackNavigator<TRootStackParamList>();

export const Routes: FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
