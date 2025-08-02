import { useMemo } from "react";

import "./TableRow.less";

const TableRow = ({ data = [], columnsConfig = {}, rowKey = () => {} }) => {
  const columns = useMemo(() => Object.keys(columnsConfig), [columnsConfig]);

  if (!data?.length) return null;

  return data.map((item, index) => {
    const rowId = rowKey(item) ?? index;

    const renderCells = columns.map((column) => {
      const columnConfig = columnsConfig[column];
      const cellValue = columnConfig?.render?.(item) ?? "N/A";

      return (
        <td
          key={column}
          className="table__body-row-data"
          style={{ minWidth: columnConfig?.width || "auto" }}
        >
          {cellValue}
        </td>
      );
    });

    return (
      <tr key={rowId} className="table__body-row">
        {renderCells}
      </tr>
    );
  });
};

export default TableRow;
