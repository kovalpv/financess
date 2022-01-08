/* eslint-disable class-methods-use-this */
import { moneyFactory } from "../common";
import {
  LoanCalculation,
  LoanCalculationProps,
  LoanReport,
  Payment,
} from "../interfaces";
import { DIFFERENTIATED_MONTHLY_LOAN, LoanTypes } from "./Contants";

export default class DifferentiatedMonthlyLoanCalculation
implements LoanCalculation {
  getName(): LoanTypes {
    return DIFFERENTIATED_MONTHLY_LOAN;
  }

  calculate({ months, debt, percent }: LoanCalculationProps): LoanReport {
    const payments: Payment[] = [];

    let balance = debt.copy();

    for (let index = 0; index < months; index += 1) {
      const monthPercent = balance.percent(percent).divide(months);
      const monthDept = debt.divide(months);
      const monthPayment = monthDept.add(monthPercent);

      balance = balance.substract(monthDept);

      payments.push({
        date: new Date(1901, 0, 1),
        payment: monthPayment,
        balance,
        percent: monthPercent,
        debt: monthDept,
      });
    }

    const total = payments.reduce(
      (prev, current) => prev.add(current.payment),
      moneyFactory.createMoney(0)
    );

    return {
      payment: moneyFactory.createMoney(0),
      payments,
      total,
    };
  }
}
