import { useCallback, useState } from "react";

import { ANALYTICS_DUMMY_DATA, SORT_DIRECTIONS } from "../constants/analytics";
import { UseDebounce } from "../utils/helpers";

export const useTableData = ({
  data = [],
  sortable = false,
  onUpdateData,
  originalData = ANALYTICS_DUMMY_DATA,
  setIsLoading,
}) => {
  const [sortOrder, setSortOrder] = useState({ key: "", direction: "" });
  const [searchText, setSearchText] = useState("");

  const getNextDirection = (column) => {
    if (sortOrder.key !== column) return SORT_DIRECTIONS.ASC;
    if (sortOrder.direction === SORT_DIRECTIONS.ASC)
      return SORT_DIRECTIONS.DESC;
    if (sortOrder.direction === SORT_DIRECTIONS.DESC)
      return SORT_DIRECTIONS.ASC;
  };

  const handleSort = useCallback(
    ({ key, direction }) => {
      const sortedData = [...data].sort((a, b) => {
        const aValue = a[key];
        const bValue = b[key];

        if (aValue === bValue) return 0;
        if (direction === SORT_DIRECTIONS.ASC) return aValue > bValue ? 1 : -1;
        return aValue < bValue ? 1 : -1;
      });
      onUpdateData(sortedData);
    },
    [data]
  );

  const handleSortClick = (column) => {
    if (!sortable) return;
    setIsLoading?.(true);
    const newDirection = getNextDirection(column);
    setSortOrder({ key: column, direction: newDirection });
    handleSort({ key: column, direction: newDirection });
  };

  const onSearch = useCallback((searchText) => {
    setIsLoading?.(true);
    const filteredData = originalData.filter((item) =>
      Object.values(item).some((value) => {
        return String(value).toLowerCase().includes(searchText.toLowerCase());
      })
    );
    onUpdateData(filteredData);
  }, []);

  const debouncedSearch = UseDebounce(onSearch, 800);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchText(value);
    debouncedSearch(value);
  };

  return {
    sortOrder,
    setSortOrder,
    handleSortClick,
    handleSearch,
    searchText,
  };
};
