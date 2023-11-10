import 'react-native';

import { render } from '@testing-library/react-native';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import RootNavigation from '../../src/navigation/RootNavigation';
import { store } from '../../src/store';

jest.mock('react-native-safe-area-context', () => {
  const inset = { top: 0, right: 0, bottom: 0, left: 0 };
  return {
    ...jest.requireActual('react-native-safe-area-context'),
    SafeAreaProvider: jest.fn(({ children }) => children),
    SafeAreaConsumer: jest.fn(({ children }) => children(inset)),
    useSafeAreaInsets: jest.fn(() => inset),
    useSafeAreaFrame: jest.fn(() => ({ x: 0, y: 0, width: 390, height: 844 })),
  };
});

describe('Root Navigation', () => {
  test('root navigation renders correctly', () => {
    render(
      <SafeAreaProvider>
        <Provider store={store}>
          {/* <NavigationContainer> */}
          <RootNavigation />
          {/* </NavigationContainer> */},
        </Provider>
      </SafeAreaProvider>,
    );
  });
});
