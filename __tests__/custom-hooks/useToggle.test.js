import { act, renderHook } from "@testing-library/react-native";
import useToggle from "~/custom-hooks/useToggle";


const renderCustomHook = (initialValue = undefined) => {
  return renderHook(() => useToggle(initialValue));
};

describe("Tests for useToggle hook", () => {
  test("if no initial value is passed to the hook, the initial value should be false", () => {
    const expectedInitialValue = false;
    const { result } = renderHook(() => useToggle());
    const value = result.current[0];
    expect(value).toEqual(expectedInitialValue);
  });

  test("if some initial value is passed to the hook, the initial value should be set to that initial value", () => {
    const expectedInitialValue = true;
    const { result } = renderCustomHook(expectedInitialValue);
    const value = result.current[0];
    expect(value).toEqual(expectedInitialValue);
  });

  test("if toggle function is called, value should be the opposite of what it was", () => {
    const initialValue = false;
    const expectedValue = true;
    const { result } = renderCustomHook(initialValue);
    const toggle = result.current[1];
    act(() => toggle());
    const value = result.current[0];
    expect(value).toEqual(expectedValue);
  });
});
