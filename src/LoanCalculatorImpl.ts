import {
  LoanCalculation,
  LoanCalculator,
  LoanReport,
  Money,
  Percent,
} from "./interfaces";

export default class LoanCalculatorImpl implements LoanCalculator {
  private loanCalculation?: LoanCalculation;

  getName() {
    this.ThrowErrorIfLoanCalculationIsEmpty();
    return this.loanCalculation.getName();
  }

  setLoanCalculation(loanCalculation: LoanCalculation): LoanCalculator {
    this.loanCalculation = loanCalculation;
    return this;
  }

  calculate(
    debt: Money,
    months: number,
    startDate: Date,
    percent: Percent
  ): LoanReport {
    this.ThrowErrorIfLoanCalculationIsEmpty();
    return this.loanCalculation.calculate({
      debt,
      months,
      startDate,
      percent,
    });
  }

  private ThrowErrorIfLoanCalculationIsEmpty() {
    if (!this.loanCalculation) {
      throw new Error(
        "field loanCalculation is not set, use setLoanCalculation"
      );
    }
  }
}
