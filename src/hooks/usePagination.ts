import { useState } from "react";

export const usePagination = (
  perPageReords: number,
  totalPageRecords: number,
) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(1);
  const totalPages = Math.ceil(totalPageRecords / perPageReords);

  const endPageIndex = currentPageIndex * perPageReords;
  const startPageIndex = endPageIndex - perPageReords;

  return {
    totalPages,
    startPageIndex,
    endPageIndex,
    currentPageIndex,
    setPage: setCurrentPageIndex,
  };
};
