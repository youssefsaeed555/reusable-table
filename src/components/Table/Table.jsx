import EmptyState from "./Components/EmptyState/EmptyState";
import TableHeader from "./Components/TableHeader/TableHeader";
import TableRow from "./Components/TableRow/TableRow";

import "./Table.less";

/**
 * Table component to display data in a tabular format.
 * It can also be extended with additional features like sorting, filtering, and pagination.
 *
 * Props:
 * - data: Array of data objects to be displayed in the table.
 * - config: Configuration object for table headers and other settings.
 * - rowKey: Function to extract a unique key for each row.
 * - title: Optional title for the table.
 * - emptyState: Optional function to render a custom empty state.
 *
 * Usage:
 * <Table
 *   data={data}
 *   config={config}
 *   rowKey={(row) => row.id}
 *   title="My Table"
 *   emptyState={() => <CustomEmptyState />}
 * />
 *
 * Example:
 * const data = [{ id: 1, name: "Item 1" }]
 * const config = [{ label: "ID", render: (item) => item.id },{ label: "Name", render: (item) => item.name }];
 * */

function Table({
  data = [],
  config = {},
  rowKey = () => {},
  title,
  emptyState = () => {},
}) {
  return (
    <div className="table-component">
      {!data.length ? (
        emptyState?.() || <EmptyState />
      ) : (
        <>
          <div className="table-component__header">
            {!!title && <div className="table-component__title">{title}</div>}
            {/* //TODO: add actions here */}
          </div>
          <div className="table-component__wrapper">
            <table className="table">
              <thead className="table__header">
                <tr className="table__header-row">
                  <TableHeader config={config} />
                </tr>
              </thead>
              <tbody className="table__body">
                <TableRow data={data} config={config} rowKey={rowKey} />
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

export default Table;
