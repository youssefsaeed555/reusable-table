import React, { Fragment } from "react";

import "./TableHeader.less";

const TableHeader = ({ config = {} }) => {
  const columns = Object.keys(config);
  if (!columns.length) return null;

  return columns.map((column) => {
    const column_label = config[column].label || "";

    return (
      <th key={column} className="table__header-row-data">
        {column_label}
      </th>
    );
  });
};

export default TableHeader;
