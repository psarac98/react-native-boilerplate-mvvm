import React, { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNavigationProps } from '~/routes/stacks/types';
import HomeScreen from '~/screens/HomeScreen';

const Stack = createNativeStackNavigator();

const HomeStack: FC<ScreenNavigationProps> = ({ route }) => {
  return (
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
};

export default HomeStack;
