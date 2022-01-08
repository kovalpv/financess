/* eslint-disable class-methods-use-this */
import {
  LoanCalculation,
  LoanCalculationProps,
  LoanReport,
  Payment,
} from "../interfaces";
import { ANNUITY_MONTHLY_LOAN, LoanTypes } from "./Contants";

export default class AnnuityMonthlyLoanCalculation implements LoanCalculation {
  // eslint-disable-next-line class-methods-use-this
  getName(): LoanTypes {
    return ANNUITY_MONTHLY_LOAN;
  }

  calculate({
    startDate,
    debt,
    months,
    percent,
  }: LoanCalculationProps): LoanReport {
    // другой расчет
    // const monthRate = percent.getValue() / 12;
    // const monthAnnuityCoefficient =
    //   (monthRate * (1 + monthRate) ** months) / ((1 + monthRate) ** months - 1);
    // const payment = debt.multiply(monthAnnuityCoefficient);

    // Расчет как в википедии
    const yearPercent = percent.addValue(100);
    const monthRate = yearPercent.getValue() ** (1 / 12) - 1;
    const monthAnnuityCoefficient2 =
      (monthRate * (1 + monthRate) ** months) / ((1 + monthRate) ** months - 1);

    const payment = debt.multiply(monthAnnuityCoefficient2);

    let balance = debt.copy();

    const payments = new Array(months).fill(null).map<Payment>((_p, index) => {
      const date = new Date(startDate.getTime());
      date.setMonth(date.getMonth() + index);

      const monthPercent = balance.multiply(monthRate);
      const monthDebt = payment.substract(monthPercent);
      balance = balance.substract(monthDebt);

      return {
        date,
        payment,
        balance,
        debt: monthDebt,
        percent: monthPercent,
      };
    });
    return {
      payments,
      payment,
      total: payment.multiply(months),
    };
  }
}
