import { useCallback, useState } from 'react';

type UseToggleReturn = {
  count: number;
  increase: () => void;
  decrease: () => void;
  setCounter: (value: number) => void;
};

const useCounter = (initialCount = 0): UseToggleReturn => {
  const [count, setCount] = useState<number>(initialCount);

  const increase = useCallback(() => {
    setCount((previous) => previous + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((previous) => previous - 1);
  }, []);

  const setCounter = useCallback((value: number) => {
    setCount(value);
  }, []);

  return {
    count,
    increase,
    decrease,
    setCounter,
  };
};

export default useCounter;
