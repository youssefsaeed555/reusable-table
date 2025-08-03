import { useState } from "react";

import EmptyState from "./Components/EmptyState/EmptyState";
import TableHeader from "./Components/TableHeader/TableHeader";
import TableRow from "./Components/TableRow/TableRow";
import TableSearch from "./Components/TableSearch/TableSearch";
import LoadingWrapper from "@/components/LoadingWrapper/LoadingWrapper";

import "./Table.less";

/**
 * Table component to display data in a tabular format.
 * It can also be extended with additional features like sorting and searching.
 * @param {Object} props - The properties for the Table component.
 * @param {Array} props.data - The data to be displayed in the table.
 * @param {Object} props.headersConfig - Configuration for the table headers.
 * It includes:
 * *  - columnsConfig: Configuration for each column.
 * *  - sortable: Boolean indicating if the table is sortable.
 * *  - searchable: Boolean indicating if the table is searchable.
 * *  - rowKey: Function to get the unique key for each row.
 * @param {string} props.title - The title of the header out of table.
 * @param {Function} props.emptyState - Function to render when there is no data.
 * @param {Function} props.onUpdateData - Callback function to update the data.
 * @return {JSX.Element} The rendered Table component.
 * @example
 * <Table
 *    data={data}
 *    headersConfig={{columnsConfig: {}, sortable: true, searchable: true, rowKey: (row) => row.id}}
 *    title="My Table"
 *    emptyState={() => <div>No data available</div>}
 *    onUpdateData={(newData) => console.log(newData)}
 * />
 */

function Table({
  data = [],
  headersConfig = {},
  title,
  emptyState = () => {},
  onUpdateData,
}) {
  const [isLoading, setIsLoading] = useState(false);

  const hasData = !!data.length;
  const {
    columnsConfig = {},
    sortable = true,
    searchable = false,
    rowKey = () => {},
  } = headersConfig;

  return (
    <div className="table-component">
      <div className="table-component__header">
        {!!title && <div className="table-component__title">{title}</div>}
        <div className="table-component__actions">
          {searchable && (
            <TableSearch
              onUpdateData={onUpdateData}
              data={data}
              setIsLoading={setIsLoading}
            />
          )}
        </div>
      </div>
      <div className="table-component__wrapper">
        {!hasData ? (
          emptyState?.() || <EmptyState />
        ) : (
          <LoadingWrapper isLoading={isLoading}>
            <table className="table">
              <thead className="table__header">
                <tr className="table__header-row">
                  <TableHeader
                    columnsConfig={columnsConfig}
                    sortable={sortable}
                    onUpdateData={onUpdateData}
                    data={data}
                    setIsLoading={setIsLoading}
                  />
                </tr>
              </thead>
              <tbody className="table__body">
                <TableRow
                  data={data}
                  columnsConfig={columnsConfig}
                  rowKey={rowKey}
                />
              </tbody>
            </table>
          </LoadingWrapper>
        )}
      </div>
    </div>
  );
}

export default Table;
