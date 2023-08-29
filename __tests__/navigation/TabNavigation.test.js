import 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React from 'react';
import TabNavigation from '~/navigation/tab-navigation';

describe('Tab navigation', () => {
  test('tab navigation renders correctly', () => {
    render(
      <NavigationContainer>
        <TabNavigation />
      </NavigationContainer>,
    );
  });
});
