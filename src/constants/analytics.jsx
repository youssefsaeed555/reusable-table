import classNames from "classnames";
import dayjs from "dayjs";
import {
  CheckCircle,
  XCircle,
  TrendingUp,
  CreditCard,
  Clock,
  DollarSign,
  CircleCheck,
} from "lucide-react";

import { formatCurrency } from "@/utils/analytics";

export const ANALYTICS_DUMMY_DATA = [
  {
    id: 299894,
    amount_cents: 5000,
    currency: "EGP",
    payment_status: "UNPAID",
    created_at: "2024-12-03T16:37:51",
  },
  {
    id: 299895,
    amount_cents: 2000,
    currency: "EGP",
    payment_status: "PAID",
    created_at: "2024-12-01T10:21:03",
  },
  {
    id: 299896,
    amount_cents: 3000,
    currency: "EGP",
    payment_status: "PAID",
    created_at: "2024-12-01T10:21:03",
  },
  {
    id: 299897,
    amount_cents: 4000,
    currency: "EGP",
    payment_status: "UNPAID",
    created_at: "2024-12-01T10:21:03",
  },
  {
    id: 299898,
    amount_cents: 6000,
    currency: "EGP",
    payment_status: "UNPAID",
    created_at: "2024-12-01T10:21:03",
  },
];

export const ANALYTICS_COLUMNS = {
  id: {
    label: (
      <span className="analytics-section__table-header-icon">
        <CreditCard />
        Transaction ID
      </span>
    ),
    render: ({ id }) => `#${id}`,
  },
  amount_cents: {
    label: (
      <span className="analytics-section__table-header-icon">
        <DollarSign />
        Amount
      </span>
    ),
    render: ({ amount_cents, currency }) =>
      formatCurrency({ amount_cents, currency }),
  },
  payment_status: {
    label: (
      <span className="analytics-section__table-header-icon">
        <CircleCheck />
        Status
      </span>
    ),
    render: ({ payment_status }) => (
      <span
        className={classNames("analytics-section__status", {
          "analytics-section__status--paid":
            payment_status === PAYMENT_STATUS.PAID,
          "analytics-section__status--unpaid":
            payment_status === PAYMENT_STATUS.UNPAID,
        })}
      >
        {payment_status === PAYMENT_STATUS.PAID ? (
          <CheckCircle className="analytics-section__status-icon paid" />
        ) : (
          <XCircle className="analytics-section__status-icon unpaid" />
        )}
        {payment_status.toUpperCase()}
      </span>
    ),
  },
  currency: {
    label: (
      <span className="analytics-section__table-header-icon">
        <TrendingUp />
        Currency
      </span>
    ),
    render: ({ currency }) => (
      <span className="analytics-section__currency">
        <TrendingUp className="analytics-section__currency-icon" />
        {currency.toUpperCase()}
      </span>
    ),
  },
  created_at: {
    label: (
      <span className="analytics-section__table-header-icon">
        <Clock />
        Date Created
      </span>
    ),
    width: "120px",
    render: ({ created_at }) => (
      <div className="analytics-section__date">
        <span className="analytics-section__date-day">
          {dayjs(created_at).format("D MMM, YYYY")}
        </span>
        <span className="analytics-section__date-time">
          {dayjs(created_at).format("hh:mm A")}
        </span>
      </div>
    ),
  },
};

export const PAYMENT_STATUS = {
  PAID: "PAID",
  UNPAID: "UNPAID",
  ALL: "ALL",
};

export const ANALYSIS_DUMMY_STATS = [
  {
    title: "Total Transactions",
    value: "24234",
    change: "+5%",
    id: PAYMENT_STATUS.ALL,
  },
  {
    title: "Unpaid Payments",
    value: "5345.67",
    change: "-3%",
    id: PAYMENT_STATUS.UNPAID,
  },
  {
    title: "Paid Payments",
    value: "19890",
    change: "+15%",
    id: PAYMENT_STATUS.PAID,
  },
];
