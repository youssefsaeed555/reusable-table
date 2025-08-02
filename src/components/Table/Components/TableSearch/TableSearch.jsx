import { Search } from "lucide-react";

import { useTableData } from "@/hooks/useTableData";

const TableSearch = ({ onUpdateData, data }) => {
  const { searchText, handleSearch } = useTableData({
    data,
    onUpdateData,
  });

  return (
    <div className="table-component__actions-search">
      <Search className="table-component__actions-search-icon" size={20} />
      <input
        type="text"
        placeholder="Search all columns..."
        className="table-component__actions-search-input"
        value={searchText}
        onChange={handleSearch}
      />
    </div>
  );
};

export default TableSearch;
