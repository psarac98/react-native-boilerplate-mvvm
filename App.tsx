import { View } from 'react-native';
import RootNavigation from './src/routes/RootNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }}>
        <RootNavigation />
      </View>
    </SafeAreaProvider>
  );
};
export default App;
