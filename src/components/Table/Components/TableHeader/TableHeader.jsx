import { ChevronDown, ChevronUp } from "lucide-react";
import classNames from "classnames";

import { SORT_DIRECTIONS } from "@/constants/analytics";
import { useTableData } from "@/hooks/useTableData";

import "./TableHeader.less";

const TableHeader = ({
  columnsConfig = {},
  sortable = true,
  data,
  onUpdateData,
  setIsLoading,
}) => {
  const { sortOrder, handleSortClick } = useTableData({
    data,
    sortable,
    onUpdateData,
    setIsLoading,
  });

  const columns = Object.keys(columnsConfig);

  const handleSortWithLoading = (column) => {
    if (!sortable) return;

    //smiulate loading while sorting
    handleSortClick(column);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  if (!columns.length) return null;

  return (
    <>
      {columns.map((column) => {
        const column_label = columnsConfig[column]?.label || "";
        const isActive = sortable && sortOrder.key === column;
        const direction = sortable && isActive ? sortOrder.direction : "";

        return (
          <th
            key={column}
            className="table__header-row-data"
            onClick={() => handleSortWithLoading(column)}
          >
            <div className="table__header-row-data-content">
              {column_label}
              {sortable && (
                <div className="table__header-row-data-content-sort-icons">
                  <ChevronUp
                    size={14}
                    className={classNames({
                      "table__header-row-data-content-sort-icons--active":
                        direction === SORT_DIRECTIONS.ASC,
                    })}
                  />
                  <ChevronDown
                    size={14}
                    className={classNames({
                      "table__header-row-data-content-sort-icons--active":
                        direction === SORT_DIRECTIONS.DESC,
                    })}
                  />
                </div>
              )}
            </div>
          </th>
        );
      })}
    </>
  );
};

export default TableHeader;
