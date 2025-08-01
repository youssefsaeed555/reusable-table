import { Search } from "lucide-react";

import "./EmptyState.less";

const EmptyState = ({
  emptyTableTitle,
  emptyTableSubtitle,
  emptyTableIcon,
}) => {
  return (
    <div className="empty-state">
      {emptyTableIcon || <Search className="empty-state__search" />}
      <p className="empty-state__title">
        {emptyTableTitle || "No data available"}
      </p>
      <p className="empty-state__description">
        {emptyTableSubtitle ||
          " Please check back later or adjust your filters"}
      </p>
    </div>
  );
};

export default EmptyState;
