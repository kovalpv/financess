import { LoanTypes } from "./LoanCalculation";

export interface Factory {
  readonly createMoney: (money: MoneyValueType) => Money;
  readonly createPercent: (persentValue: PercentValueType) => Percent;
}

export interface LoanCalculation {
  readonly getName: () => LoanTypes;
  readonly calculate: (props: LoanCalculationProps) => LoanReport;
}

export interface LoanCalculationProps {
  readonly debt: Money;
  readonly months: number;
  readonly startDate: Date;
  readonly percent: Percent;
}

export interface LoanCalculator {
  readonly getName: () => string;
  readonly setLoanCalculation: (
    loanCalculation: LoanCalculation
  ) => LoanCalculator;
  readonly calculate: (
    debt: Money,
    months: number,
    startDate: Date,
    percent: Percent
  ) => LoanReport;
}

export interface LoanReport {
  readonly payments: Payment[];
  readonly total: Money;
  readonly payment: Money;
}

export interface Money {
  readonly getValue: () => number;
  readonly add: (money: Money) => Money;
  readonly multiply: (value: number) => Money;
  readonly divide: (value: number) => Money;
  readonly substract: (money: Money) => Money;
  readonly percent: (percent: Percent) => Money;
  readonly copy: () => Money;
}

export type MoneyValueType = number;

export interface Payment {
  readonly date: Date;
  readonly payment: Money;
  readonly balance: Money;
  readonly percent: Money;
  readonly debt: Money;
}

export type PaymentNullable = Payment | null;

export interface Percent {
  readonly apply: (value: number) => number;
  readonly getValue: () => number;
  readonly addValue: (value: number) => Percent;
  readonly pow: (value: number) => Percent;
}

export type PercentValueType = number;
