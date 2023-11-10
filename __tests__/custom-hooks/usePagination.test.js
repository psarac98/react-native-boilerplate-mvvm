/** @format */

import { act, renderHook } from '@testing-library/react-native';

import usePagination from '../../src/custom-hooks/usePagination';

const totalNumberOfPages = 2;

const renderCustomHook = () => {
  return renderHook(() => usePagination());
};

describe('Tests for usePagination hook', () => {
  test('on initial render, page should be 0', () => {
    const { result } = renderCustomHook();
    const { page } = result.current;
    expect(page).toEqual(0);
  });

  test('when handlePageIncrease is called with total number of pages grater than current page number, page should increase', () => {
    const { result } = renderCustomHook();
    const { handlePageIncrease } = result.current;
    act(() => handlePageIncrease(totalNumberOfPages));
    const { page } = result.current;
    expect(page).toEqual(1);
  });

  test('when handlePageIncrease is called with total number of pages less or equal to current page number, page should not increase', () => {
    const { result } = renderCustomHook();
    const { handlePageIncrease } = result.current;
    act(() => handlePageIncrease(totalNumberOfPages));
    const { handlePageIncrease: handlePageIncrease1 } = result.current;
    act(() => handlePageIncrease1(totalNumberOfPages));
    const { page } = result.current;
    expect(page).toEqual(1);
  });
});
