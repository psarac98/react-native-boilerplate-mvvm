import { useState } from 'react';

const useToggle = (initialValue = false): [boolean, () => void] => {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggleValue = () => {
    setValue((prev) => !prev);
  };

  return [value, toggleValue];
};

export default useToggle;
