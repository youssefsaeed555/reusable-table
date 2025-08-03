import { Search } from "lucide-react";

import { useTableData } from "@/hooks/useTableData";

const TableSearch = ({ onUpdateData, data, setIsLoading }) => {
  const { searchText, handleSearch } = useTableData({
    data,
    onUpdateData,
    setIsLoading,
  });

  const handleSearchWithLoading = (event) => {
    //smiulate loading while searching
    handleSearch(event);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="table-component__actions-search">
      <Search className="table-component__actions-search-icon" size={20} />
      <input
        type="text"
        placeholder="Search all columns..."
        className="table-component__actions-search-input"
        value={searchText}
        onChange={(event) => handleSearchWithLoading(event)}
      />
    </div>
  );
};

export default TableSearch;
