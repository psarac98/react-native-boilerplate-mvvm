import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC } from 'react';
import HomeScreen from '~/screens/HomeScreen';
import { ScreenNavigationProps } from '../types';

const Stack = createNativeStackNavigator();

const HomeStack: FC<ScreenNavigationProps> = () => (
  <Stack.Navigator
    initialRouteName="HomeScreen"
    screenOptions={{
      headerTitle: '',
      headerBackTitleVisible: false,
    }}
  >
    <Stack.Screen
      name="HomeScreen"
      options={{
        headerTitle: 'Home Screen',
      }}
      component={HomeScreen}
    />
  </Stack.Navigator>
);

export default HomeStack;
