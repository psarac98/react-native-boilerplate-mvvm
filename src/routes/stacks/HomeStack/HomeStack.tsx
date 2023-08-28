import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from '~/screens/HomeScreen';

const Stack = createNativeStackNavigator<HomeStackParamList>();
// type PlaceDetailScreenProps = { placeID: string; title?: string };
// type HomeStackProps = ScreenNavigationProps;
type HomeStackParamList = {
  HomeScreen: undefined;
};

function HomeStack() {
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
}

export default HomeStack;
