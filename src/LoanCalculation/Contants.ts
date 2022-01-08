export const ANNUITY_DAILY_LOAN = "annuity_daily";
export const ANNUITY_MONTHLY_LOAN = "annuity_monthly";
export const DIFFERENTIATED_MONTHLY_LOAN = "differentiated_monthly";

// eslint-disable-next-line sort-exports/sort-exports
export type LoanTypes =
  | typeof ANNUITY_MONTHLY_LOAN
  | typeof DIFFERENTIATED_MONTHLY_LOAN
  | typeof ANNUITY_DAILY_LOAN;
