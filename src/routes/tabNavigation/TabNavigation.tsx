/** @format */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import React from 'react';
import HomeStack from '~/routes/stacks/HomeStack';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

function TabNavigation() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={() => ({
        headerShown: false,
      })}
    >
      <Screen component={HomeStack} name="Home" />
    </Navigator>
  );
}

export default TabNavigation;
