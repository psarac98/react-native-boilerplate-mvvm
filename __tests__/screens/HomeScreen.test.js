import { render } from '@testing-library/react-native';
import React from 'react';
import HomeScreen from '../../src/screens/HomeScreen';

const resetHomeScreenControllerState = () => {
  useHomeScreenControllerMockValue.data.allEvents = [];
  useHomeScreenControllerMockValue.shouldRenderLoadingIndicator = false;
  useHomeScreenControllerMockValue.shouldRenderScreenError = false;
};

const useHomeScreenControllerMockValue = {
  data: {
    allEvents: [],
  },
  shouldRenderLoadingIndicator: false,
  shouldRenderScreenError: false,
};

jest.mock('../../src/screen-controllers/useHomeScreenController', () => {
  const useHomeScreenControllerMock = jest.fn(() => useHomeScreenControllerMockValue);

  return {
    __esModule: true,
    default: useHomeScreenControllerMock,
  };
});

describe('HomeScreen Component', () => {
  afterEach(resetHomeScreenControllerState);

  test('should render an error message if an error occurs while fetching data from the api', () => {
    useHomeScreenControllerMockValue.shouldRenderScreenError = true;
    const { getByText } = render(<HomeScreen />);
    const error = getByText('Error: Unable to load data');
    expect(error).toBeTruthy();
  });

  test('should show loading spinner while data is being fetched from the api', () => {
    useHomeScreenControllerMockValue.shouldRenderLoadingIndicator = true;
    const { getByTestId } = render(<HomeScreen />);
    const loadingIndicator = getByTestId('loading-indicator');
    expect(loadingIndicator).toBeTruthy();
  });

  test('should render event titles when data is successfully obtained from the api', () => {
    useHomeScreenControllerMockValue.data.allEvents = [
      { id: 1, title: 'Event 1' },
      { id: 2, title: 'Event 2' },
    ];
    const { getByText } = render(<HomeScreen />);
    const event1 = getByText('Event 1');
    const event2 = getByText('Event 2');
    expect(event1).toBeTruthy();
    expect(event2).toBeTruthy();
  });
});
