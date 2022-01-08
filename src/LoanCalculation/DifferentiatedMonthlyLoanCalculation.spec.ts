/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { moneyFactory } from "../common";
import { toBeCloseTo } from "../setupTests";
import DifferentiatedMonthlyLoanCalculation from "./DifferentiatedMonthlyLoanCalculation";

describe("DifferentiatedMonthlyLoanCalculation", () => {
  test("should calculate mortgage '1 000 000' by 12% on 12 months", () => {
    const calculation = new DifferentiatedMonthlyLoanCalculation();

    const { expected } = load_1_000_000_months_240_percent_10;
    const { total, payments } = calculation.calculate({
      debt: moneyFactory.createMoney(load_1_000_000_months_240_percent_10.debt),
      months: load_1_000_000_months_240_percent_10.months,
      startDate: load_1_000_000_months_240_percent_10.startDate,
      percent: moneyFactory.createPercent(
        load_1_000_000_months_240_percent_10.percent
      ),
    });

    expect(total.getValue()).toBeCloseTo(expected.total, 2);
    // expect(payments.length).toEqual(expected.payments.length);

    for (let index = 0; index < expected.payments.length; index += 1) {
      const expectedPayment = expected.payments[index];
      const actualPayment = payments[index];

      toBeCloseTo(
        expectedPayment.payment,
        actualPayment.payment.getValue(),
        `actual month payment is not equals for month by index: ${index}`
      );

      toBeCloseTo(
        expectedPayment.percent,
        actualPayment.percent.getValue(),
        `actual month percent is not equals for month by index: ${index}`
      );

      toBeCloseTo(
        expectedPayment.debt,
        actualPayment.debt.getValue(),
        `actual month debt is not equals for month by index: ${index}`
      );

      toBeCloseTo(
        expectedPayment.balance,
        actualPayment.balance.getValue(),
        `actual month balance is not equals for month by index: ${index}`
      );
    }
  });
});

const load_1_000_000_months_240_percent_10 = {
  debt: 1_000_000,
  months: 12,
  startDate: new Date(2010, 0, 1),
  percent: 12,

  expected: {
    // payment: 936.64,
    total: 1_065_000.0,
    payments: [
      {
        payment: 93333.33, percent: 10000, debt: 83333.33, balance: 916666.67
      },
      {
        payment: 92500, percent: 9166.67, debt: 83333.33, balance: 833333.33
      },
      {
        payment: 91666.67, percent: 8333.33, debt: 83333.33, balance: 750000
      },
      {
        payment: 90833.33, percent: 7500, debt: 83333.33, balance: 666666.67
      },
      {
        payment: 90000, percent: 6666.67, debt: 83333.33, balance: 583333.33
      },
      {
        payment: 89166.67, percent: 5833.33, debt: 83333.33, balance: 500000
      },
      {
        payment: 88333.33, percent: 5000, debt: 83333.33, balance: 416666.67
      },
      {
        payment: 87500, percent: 4166.67, debt: 83333.33, balance: 333333.33
      },
      {
        payment: 86666.67, percent: 3333.33, debt: 83333.33, balance: 250000
      },
      {
        payment: 85833.33, percent: 2500, debt: 83333.33, balance: 166666.67
      },
      {
        payment: 85000, percent: 1666.67, debt: 83333.33, balance: 83333.33
      },
      {
        payment: 84166.67, percent: 833.33, debt: 83333.33, balance: 0
      },
    ],
  },
};
