import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigation from './src/navigation/RootNavigation';

const App = () => (
  <SafeAreaProvider>
    <View style={{ flex: 1 }}>
      <RootNavigation />
    </View>
  </SafeAreaProvider>
);
export default App;
