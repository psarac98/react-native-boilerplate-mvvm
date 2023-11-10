import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';

const Tab = createBottomTabNavigator();
const { Navigator, Screen } = Tab;

const TabNavigation = () => (
  <Navigator
    initialRouteName="Home"
    screenOptions={() => ({
      headerShown: false,
    })}
  >
    <Screen component={HomeStack} name="Home" />
    <Screen component={HomeStack} name="Search" />
    <Screen component={HomeStack} name="My Events" />
    <Screen component={HomeStack} name="Profile" />
  </Navigator>
);

export default TabNavigation;
