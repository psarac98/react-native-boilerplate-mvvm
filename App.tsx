import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import RootNavigation from './src/navigation/RootNavigation';
import { persistor, store } from './src/store';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <SafeAreaProvider>
        <View style={{ flex: 1 }}>
          <RootNavigation />
        </View>
      </SafeAreaProvider>
    </PersistGate>
  </Provider>
);
export default App;
