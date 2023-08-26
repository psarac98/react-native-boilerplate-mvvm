import { ParamListBase, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ScreenRouteProp = RouteProp<ParamListBase, string>;

type ScreenNavigationProp = NativeStackNavigationProp<ParamListBase, string>;

export type ScreenNavigationProps = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};
