import { CheckCircle, TrendingUp, XCircle } from "lucide-react";

import { PAYMENT_STATUS } from "@/constants/analytics";

export const analyticsMapperIcon = (type) => {
  switch (type) {
    case PAYMENT_STATUS.PAID:
      return CheckCircle;
    case PAYMENT_STATUS.UNPAID:
      return XCircle;
    case PAYMENT_STATUS.ALL:
      return TrendingUp;
    default:
      return null;
  }
};

export const formatCurrency = ({ amount_cents, currency = "EGP" }) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency,
  }).format(amount_cents);
