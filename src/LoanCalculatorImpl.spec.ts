import { mock } from "jest-mock-extended";

import { moneyFactory } from "./common";
import { LoanCalculation, LoanCalculator } from "./interfaces";
import { LoanTypes } from "./LoanCalculation";
import LoanCalculatorImpl from "./LoanCalculatorImpl";

describe("LoanCalculatorImpl", () => {
  let calculator: LoanCalculator;

  beforeEach(() => {
    calculator = new LoanCalculatorImpl();
  });
  test("should create instance", () => {
    expect(calculator).not.toBeNull();
  });

  describe("ThrowErrorIfCalculationIsEmpty", () => {
    test("should throw error when try get name and loanCalculation is undefined", () => {
      expect(() => {
        calculator.getName();
      }).toThrowError(
        "field loanCalculation is not set, use setLoanCalculation"
      );
    });

    test("should throw error when try to calculate and loanCalculation is undefined", () => {
      expect(() => {
        const money = moneyFactory.createMoney(0);
        const months = 12;
        const startDate = new Date(2010, 0, 1);
        const percent = moneyFactory.createPercent(12);
        calculator.calculate(money, months, startDate, percent);
      }).toThrowError(
        "field loanCalculation is not set, use setLoanCalculation"
      );
    });
  });

  test("should return name when loanCalculation was set", () => {
    const loanCalculation = mock<LoanCalculation>();

    loanCalculation.getName.mockReturnValueOnce(
      "test-calculation-type" as LoanTypes
    );
    calculator.setLoanCalculation(loanCalculation);

    expect(calculator.getName()).toEqual("test-calculation-type" as LoanTypes);
    expect(loanCalculation.getName).toBeCalledTimes(1);
  });

  test("should return LoanResult when loanCalculation was set", () => {
    const loanCalculation = mock<LoanCalculation>();

    loanCalculation.calculate.mockReturnValueOnce({
      payments: [],
      total: moneyFactory.createMoney(0),
      payment: moneyFactory.createMoney(0),
    });
    const startDate = new Date(2012, 0, 0);
    const percent = moneyFactory.createPercent(12);
    calculator.setLoanCalculation(loanCalculation);
    const result = calculator.calculate(
      moneyFactory.createMoney(10),
      12,
      startDate,
      percent
    );

    expect(result).not.toBeNull();
    expect(loanCalculation.calculate).toBeCalledTimes(1);
  });
});
