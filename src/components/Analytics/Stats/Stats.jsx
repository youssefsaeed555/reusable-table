import { memo } from "react";

import { analyticsMapperIcon, formatCurrency } from "@/utils/analytics";
import { ANALYSIS_DUMMY_STATS } from "@/constants/analytics";

import "./Stats.less";

const Stats = () => {
  return (
    <div className="analytics-section__stats">
      {ANALYSIS_DUMMY_STATS.map((state) => {
        const { title, value, change, id } = state;
        const Icon = analyticsMapperIcon(id);

        return (
          <div
            key={id}
            className={`analytics-section__stats-item analytics-section__stats-item--${id}`}
          >
            <span className="analytics-section__stats-item-icon">
              <Icon />
            </span>
            <section className="analytics-section__stats-item-content">
              <h3 className="analytics-section__stats-item-content-value">
                {formatCurrency({ amount_cents: value })}
              </h3>
              <span className="analytics-section__stats-item-content-title">
                {title}
              </span>
              <span className="analytics-section__stats-item-content-change">
                {change} in this month
              </span>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default memo(Stats);
