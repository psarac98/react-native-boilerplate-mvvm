import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TabNavigation from './tabNavigation';

type RootNavigationParamList = {
  Main: undefined;
};

const RootStack = createNativeStackNavigator<RootNavigationParamList>();

const RootNavigation = () => {
  const insets = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <View
        style={{
          flex: 1,
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
          paddingLeft: insets.left,
          paddingRight: insets.right,
        }}
      >
        <RootStack.Navigator>
          <RootStack.Screen
            component={TabNavigation}
            name="Main"
            options={{ headerShown: false }}
          />
        </RootStack.Navigator>
      </View>
    </NavigationContainer>
  );
};

export default RootNavigation;
