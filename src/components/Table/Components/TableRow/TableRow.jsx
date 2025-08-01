import "./TableRow.less";

const TableRow = ({ data = [], config = {}, rowKey = () => {} }) => {
  if (!data?.length) return null;

  const columns = Object.keys(config);

  return data.map((item, index) => {
    const rowId = rowKey(item) ?? index;

    const renderCells = columns.map((column) => {
      const columnConfig = config[column];

      return (
        <td
          key={column}
          className="table__body-row-data"
          style={{ minWidth: columnConfig?.width || "auto" }}
        >
          {columnConfig?.render?.(item) ?? "N/A"}
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
