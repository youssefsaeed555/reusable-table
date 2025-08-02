import { useCallback, useState } from "react";

import { ANALYTICS_COLUMNS, ANALYTICS_DUMMY_DATA } from "@/constants/analytics";

import Table from "@/components/Table/Table";
import Stats from "@/components/Analytics/Stats/Stats";

import "./Analytics.less";

const Analytics = () => {
  const [analytics, setAnalytics] = useState(ANALYTICS_DUMMY_DATA);

  const getRowId = useCallback((record, index) => {
    return record?.id ?? index;
  }, []);

  return (
    <div className="analytics-section">
      <section className="analytics-section__header">
        <div className="analytics-section__header-content">
          <h1 className="analytics-section__header-content-title">
            Paymob Analytics
          </h1>
          <p className="analytics-section__header-content-description">
            View your transactions and payment statuses. This section helps you
            track your collected cash over a period of time.
          </p>
        </div>
        <img
          src="/images/paymobLogo.png"
          alt="paymob Icon"
          className="analytics-section__header-icon"
        />
      </section>

      <Stats />

      <Table
        data={analytics}
        headersConfig={{
          columnsConfig: ANALYTICS_COLUMNS,
          searchable: true,
          sortable: true,
          rowKey: getRowId,
        }}
        title={
          <section className="analytics-section__table-header">
            <h2>{analytics.length} transactions</h2>
            <p>Track your collected cash over a period of time.</p>
          </section>
        }
        onUpdateData={setAnalytics}
      />
    </div>
  );
};

export default Analytics;
