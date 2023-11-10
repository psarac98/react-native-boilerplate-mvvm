/** @format */

import { act, renderHook } from '@testing-library/react-native';
import useCounter from '../../src/custom-hooks/useCounter';

const renderCustomHook = (initialValue = undefined) => renderHook(() => useCounter(initialValue));

describe('Tests for useCounter hook', () => {
  test('if no initial value is passed to the hook, the initial counter value should be zero', () => {
    const expectedInitialValue = 0;
    const { result } = renderHook(() => useCounter());
    const { count } = result.current;
    expect(count).toEqual(expectedInitialValue);
  });

  test('if some initial value is passed to the hook, the initial counter value should be that initial value', () => {
    const expectedInitialValue = 5;
    const { result } = renderCustomHook(expectedInitialValue);
    const { count } = result.current;
    expect(count).toEqual(expectedInitialValue);
  });

  test('if increase function is called, value should be increased by one', () => {
    const initialValue = 4;
    const expectedValue = 5;
    const { result } = renderCustomHook(initialValue);
    const { increase } = result.current;
    act(() => increase());
    const { count } = result.current;
    expect(count).toEqual(expectedValue);
  });

  test('if decrease function is called, value should be decreased by one', () => {
    const initialValue = 4;
    const expectedValue = 3;
    const { result } = renderCustomHook(initialValue);
    const { decrease } = result.current;
    act(() => decrease());
    const { count } = result.current;
    expect(count).toEqual(expectedValue);
  });

  test('if decrease function is called, value should be decreased by one', () => {
    const passedInValue = 5;
    const { result } = renderCustomHook();
    const { setCounter } = result.current;
    act(() => setCounter(passedInValue));
    const { count } = result.current;
    expect(count).toEqual(passedInValue);
  });
});
