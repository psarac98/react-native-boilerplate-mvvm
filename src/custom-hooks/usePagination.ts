import useCounter from './useCounter';

const usePagination = (
  initialPage?: number,
): {
  page: number;
  handlePageIncrease: (totalPages: number) => void;
  setCounter: (value: number) => void;
} => {
  const {
    count: currentPage,
    increase: incresePage,
    setCounter,
  } = useCounter(initialPage);

  const handlePageIncrease = (totalPages: number) => {
    if (currentPage < totalPages - 1) {
      incresePage();
    }
  };

  return { page: currentPage, handlePageIncrease, setCounter };
};

export default usePagination;
