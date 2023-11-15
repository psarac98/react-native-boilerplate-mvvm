import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';
import mockSafeAreaContext from './__mocks__/mockSafeAreaContext';

import 'whatwg-fetch';

// eslint-disable-next-line no-undef
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// eslint-disable-next-line no-undef
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext);
