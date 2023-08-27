import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FC } from 'react';
import { Text } from 'react-native';
import HomeStack from '~/routes/stacks/HomeStack';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const TabNavigation: FC = () => {
  return (
    <Navigator
      initialRouteName={'Home'}
      screenOptions={({ route: { name: routeName } }) => {
        return {
          headerShown: false,
        };
      }}
    >
      <Screen component={HomeStack} name={'Home'} />
      <Screen component={ProfileStack} name={'Profile'} />
    </Navigator>
  );
};

const ProfileStack = () => {
  return <Text>Hello</Text>;
};
export default TabNavigation;
