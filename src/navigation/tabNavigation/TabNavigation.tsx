import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '~/navigation/stacks/HomeStack';

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
  </Navigator>
);

export default TabNavigation;
