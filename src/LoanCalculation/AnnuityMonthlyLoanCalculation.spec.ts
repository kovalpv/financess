/* eslint-disable max-len */
/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { moneyFactory } from "../common";
import { toBeCloseTo } from "../setupTests";
import AnnuityMonthlyLoanCalculation from "./AnnuityMonthlyLoanCalculation";
import { ANNUITY_MONTHLY_LOAN } from "./Contants";

describe("AnnuityMonthlyLoanCalculation", () => {
  let calculation: AnnuityMonthlyLoanCalculation;

  beforeEach(() => {
    calculation = new AnnuityMonthlyLoanCalculation();
  });

  test("should create instance", () => {
    expect(calculation).not.toBeNull();
  });

  test("should return name equals ANNUITY_MONTHLY_LOAN", () => {
    expect(calculation.getName()).toEqual(ANNUITY_MONTHLY_LOAN);
  });

  test("should calculate load report when dept equals '100 000.00', period 20 years and 10 percent loan", () => {
    const {
      debt, months, percent, expected
    } =
      load_100_000_months_240_percent_10;

    const { payments, total, payment } = calculation.calculate({
      debt: moneyFactory.createMoney(debt),
      months,
      startDate: new Date(2010, 0, 1),
      percent: moneyFactory.createPercent(percent),
    });

    expect(payment.getValue()).toBeCloseTo(expected.payment, 2);

    expect(total.getValue()).toBeCloseTo(expected.total, 2);
    expect(payments.length).toEqual(expected.payments.length);

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

const load_100_000_months_240_percent_10 = {
  debt: 100_000,
  months: 240,
  startDate: new Date(2010, 0, 1),
  percent: 10,

  expected: {
    payment: 936.64,
    total: 224_793.49,
    payments: [
      {
        payment: 936.64,
        percent: 797.41,
        debt: 139.23,
        balance: 99860.77,
      },
      {
        payment: 936.64,
        percent: 796.3,
        debt: 140.34,
        balance: 99720.44,
      },
      {
        payment: 936.64,
        percent: 795.18,
        debt: 141.45,
        balance: 99578.98,
      },
      {
        payment: 936.64,
        percent: 794.06,
        debt: 142.58,
        balance: 99436.4,
      },
      {
        payment: 936.64,
        percent: 792.92,
        debt: 143.72,
        balance: 99292.68,
      },
      {
        payment: 936.64,
        percent: 791.77,
        debt: 144.87,
        balance: 99147.82,
      },
      {
        payment: 936.64,
        percent: 790.62,
        debt: 146.02,
        balance: 99001.79,
      },
      {
        payment: 936.64,
        percent: 789.45,
        debt: 147.19,
        balance: 98854.61,
      },
      {
        payment: 936.64,
        percent: 788.28,
        debt: 148.36,
        balance: 98706.25,
      },
      {
        payment: 936.64,
        percent: 787.1,
        debt: 149.54,
        balance: 98556.71,
      },
      {
        payment: 936.64,
        percent: 785.91,
        debt: 150.73,
        balance: 98405.97,
      },
      {
        payment: 936.64,
        percent: 784.7,
        debt: 151.94,
        balance: 98254.04,
      },
      {
        payment: 936.64,
        percent: 783.49,
        debt: 153.15,
        balance: 98100.89,
      },
      {
        payment: 936.64,
        percent: 782.27,
        debt: 154.37,
        balance: 97946.52,
      },
      {
        payment: 936.64,
        percent: 781.04,
        debt: 155.6,
        balance: 97790.92,
      },
      {
        payment: 936.64,
        percent: 779.8,
        debt: 156.84,
        balance: 97634.08,
      },
      {
        payment: 936.64,
        percent: 778.55,
        debt: 158.09,
        balance: 97475.99,
      },
      {
        payment: 936.64,
        percent: 777.29,
        debt: 159.35,
        balance: 97316.63,
      },
      {
        payment: 936.64,
        percent: 776.02,
        debt: 160.62,
        balance: 97156.01,
      },
      {
        payment: 936.64,
        percent: 774.74,
        debt: 161.9,
        balance: 96994.11,
      },
      {
        payment: 936.64,
        percent: 773.44,
        debt: 163.19,
        balance: 96830.91,
      },
      {
        payment: 936.64,
        percent: 772.14,
        debt: 164.5,
        balance: 96666.42,
      },
      {
        payment: 936.64,
        percent: 770.83,
        debt: 165.81,
        balance: 96500.61,
      },
      {
        payment: 936.64,
        percent: 769.51,
        debt: 167.13,
        balance: 96333.48,
      },
      {
        payment: 936.64,
        percent: 768.18,
        debt: 168.46,
        balance: 96165.02,
      },
      {
        payment: 936.64,
        percent: 766.83,
        debt: 169.81,
        balance: 95995.21,
      },
      {
        payment: 936.64,
        percent: 765.48,
        debt: 171.16,
        balance: 95824.05,
      },
      {
        payment: 936.64,
        percent: 764.11,
        debt: 172.53,
        balance: 95651.52,
      },
      {
        payment: 936.64,
        percent: 762.74,
        debt: 173.9,
        balance: 95477.62,
      },
      {
        payment: 936.64,
        percent: 761.35,
        debt: 175.29,
        balance: 95302.34,
      },
      {
        payment: 936.64,
        percent: 759.95,
        debt: 176.69,
        balance: 95125.65,
      },
      {
        payment: 936.64,
        percent: 758.55,
        debt: 178.09,
        balance: 94947.56,
      },
      {
        payment: 936.64,
        percent: 757.13,
        debt: 179.51,
        balance: 94768.04,
      },
      {
        payment: 936.64,
        percent: 755.69,
        debt: 180.95,
        balance: 94587.1,
      },
      {
        payment: 936.64,
        percent: 754.25,
        debt: 182.39,
        balance: 94404.71,
      },
      {
        payment: 936.64,
        percent: 752.8,
        debt: 183.84,
        balance: 94220.86,
      },
      {
        payment: 936.64,
        percent: 751.33,
        debt: 185.31,
        balance: 94035.56,
      },
      {
        payment: 936.64,
        percent: 749.85,
        debt: 186.79,
        balance: 93848.77,
      },
      {
        payment: 936.64,
        percent: 748.36,
        debt: 188.28,
        balance: 93660.49,
      },
      {
        payment: 936.64,
        percent: 746.86,
        debt: 189.78,
        balance: 93470.71,
      },
      {
        payment: 936.64,
        percent: 745.35,
        debt: 191.29,
        balance: 93279.42,
      },
      {
        payment: 936.64,
        percent: 743.82,
        debt: 192.82,
        balance: 93086.61,
      },
      {
        payment: 936.64,
        percent: 742.29,
        debt: 194.35,
        balance: 92892.25,
      },
      {
        payment: 936.64,
        percent: 740.74,
        debt: 195.9,
        balance: 92696.35,
      },
      {
        payment: 936.64,
        percent: 739.17,
        debt: 197.47,
        balance: 92498.88,
      },
      {
        payment: 936.64,
        percent: 737.6,
        debt: 199.04,
        balance: 92299.84,
      },
      {
        payment: 936.64,
        percent: 736.01,
        debt: 200.63,
        balance: 92099.22,
      },
      {
        payment: 936.64,
        percent: 734.41,
        debt: 202.23,
        balance: 91896.99,
      },
      {
        payment: 936.64,
        percent: 732.8,
        debt: 203.84,
        balance: 91693.15,
      },
      {
        payment: 936.64,
        percent: 731.17,
        debt: 205.47,
        balance: 91487.68,
      },
      {
        payment: 936.64,
        percent: 729.54,
        debt: 207.1,
        balance: 91280.58,
      },
      {
        payment: 936.64,
        percent: 727.88,
        debt: 208.76,
        balance: 91071.82,
      },
      {
        payment: 936.64,
        percent: 726.22,
        debt: 210.42,
        balance: 90861.4,
      },
      {
        payment: 936.64,
        percent: 724.54,
        debt: 212.1,
        balance: 90649.31,
      },
      {
        payment: 936.64,
        percent: 722.85,
        debt: 213.79,
        balance: 90435.52,
      },
      {
        payment: 936.64,
        percent: 721.15,
        debt: 215.49,
        balance: 90220.02,
      },
      {
        payment: 936.64,
        percent: 719.43,
        debt: 217.21,
        balance: 90002.81,
      },
      {
        payment: 936.64,
        percent: 717.7,
        debt: 218.94,
        balance: 89783.87,
      },
      {
        payment: 936.64,
        percent: 715.95,
        debt: 220.69,
        balance: 89563.17,
      },
      {
        payment: 936.64,
        percent: 714.19,
        debt: 222.45,
        balance: 89340.72,
      },
      {
        payment: 936.64,
        percent: 712.42,
        debt: 224.22,
        balance: 89116.5,
      },
      {
        payment: 936.64,
        percent: 710.63,
        debt: 226.01,
        balance: 88890.49,
      },
      {
        payment: 936.64,
        percent: 708.83,
        debt: 227.81,
        balance: 88662.67,
      },
      {
        payment: 936.64,
        percent: 707.01,
        debt: 229.63,
        balance: 88433.04,
      },
      {
        payment: 936.64,
        percent: 705.18,
        debt: 231.46,
        balance: 88201.58,
      },
      {
        payment: 936.64,
        percent: 703.33,
        debt: 233.31,
        balance: 87968.27,
      },
      {
        payment: 936.64,
        percent: 701.47,
        debt: 235.17,
        balance: 87733.11,
      },
      {
        payment: 936.64,
        percent: 699.6,
        debt: 237.04,
        balance: 87496.06,
      },
      {
        payment: 936.64,
        percent: 697.71,
        debt: 238.93,
        balance: 87257.13,
      },
      {
        payment: 936.64,
        percent: 695.8,
        debt: 240.84,
        balance: 87016.29,
      },
      {
        payment: 936.64,
        percent: 693.88,
        debt: 242.76,
        balance: 86773.53,
      },
      {
        payment: 936.64,
        percent: 691.94,
        debt: 244.7,
        balance: 86528.83,
      },
      {
        payment: 936.64,
        percent: 689.99,
        debt: 246.65,
        balance: 86282.19,
      },
      {
        payment: 936.64,
        percent: 688.03,
        debt: 248.61,
        balance: 86033.57,
      },
      {
        payment: 936.64,
        percent: 686.04,
        debt: 250.6,
        balance: 85782.98,
      },
      {
        payment: 936.64,
        percent: 684.05,
        debt: 252.59,
        balance: 85530.38,
      },
      {
        payment: 936.64,
        percent: 682.03,
        debt: 254.61,
        balance: 85275.78,
      },
      {
        payment: 936.64,
        percent: 680,
        debt: 256.64,
        balance: 85019.14,
      },
      {
        payment: 936.64,
        percent: 677.95,
        debt: 258.68,
        balance: 84760.45,
      },
      {
        payment: 936.64,
        percent: 675.89,
        debt: 260.75,
        balance: 84499.71,
      },
      {
        payment: 936.64,
        percent: 673.81,
        debt: 262.83,
        balance: 84236.88,
      },
      {
        payment: 936.64,
        percent: 671.72,
        debt: 264.92,
        balance: 83971.96,
      },
      {
        payment: 936.64,
        percent: 669.6,
        debt: 267.04,
        balance: 83704.92,
      },
      {
        payment: 936.64,
        percent: 667.47,
        debt: 269.16,
        balance: 83435.76,
      },
      {
        payment: 936.64,
        percent: 665.33,
        debt: 271.31,
        balance: 83164.44,
      },
      {
        payment: 936.64,
        percent: 663.16,
        debt: 273.47,
        balance: 82890.97,
      },
      {
        payment: 936.64,
        percent: 660.98,
        debt: 275.66,
        balance: 82615.31,
      },
      {
        payment: 936.64,
        percent: 658.79,
        debt: 277.85,
        balance: 82337.46,
      },
      {
        payment: 936.64,
        percent: 656.57,
        debt: 280.07,
        balance: 82057.39,
      },
      {
        payment: 936.64,
        percent: 654.34,
        debt: 282.3,
        balance: 81775.09,
      },
      {
        payment: 936.64,
        percent: 652.09,
        debt: 284.55,
        balance: 81490.54,
      },
      {
        payment: 936.64,
        percent: 649.82,
        debt: 286.82,
        balance: 81203.71,
      },
      {
        payment: 936.64,
        percent: 647.53,
        debt: 289.11,
        balance: 80914.6,
      },
      {
        payment: 936.64,
        percent: 645.22,
        debt: 291.42,
        balance: 80623.19,
      },
      {
        payment: 936.64,
        percent: 642.9,
        debt: 293.74,
        balance: 80329.45,
      },
      {
        payment: 936.64,
        percent: 640.56,
        debt: 296.08,
        balance: 80033.37,
      },
      {
        payment: 936.64,
        percent: 638.2,
        debt: 298.44,
        balance: 79734.93,
      },
      {
        payment: 936.64,
        percent: 635.82,
        debt: 300.82,
        balance: 79434.1,
      },
      {
        payment: 936.64,
        percent: 633.42,
        debt: 303.22,
        balance: 79130.88,
      },
      {
        payment: 936.64,
        percent: 631,
        debt: 305.64,
        balance: 78825.24,
      },
      {
        payment: 936.64,
        percent: 628.56,
        debt: 308.08,
        balance: 78517.17,
      },
      {
        payment: 936.64,
        percent: 626.11,
        debt: 310.53,
        balance: 78206.64,
      },
      {
        payment: 936.64,
        percent: 623.63,
        debt: 313.01,
        balance: 77893.63,
      },
      {
        payment: 936.64,
        percent: 621.13,
        debt: 315.5,
        balance: 77578.12,
      },
      {
        payment: 936.64,
        percent: 618.62,
        debt: 318.02,
        balance: 77260.1,
      },
      {
        payment: 936.64,
        percent: 616.08,
        debt: 320.56,
        balance: 76939.55,
      },
      {
        payment: 936.64,
        percent: 613.53,
        debt: 323.11,
        balance: 76616.43,
      },
      {
        payment: 936.64,
        percent: 610.95,
        debt: 325.69,
        balance: 76290.74,
      },
      {
        payment: 936.64,
        percent: 608.35,
        debt: 328.29,
        balance: 75962.46,
      },
      {
        payment: 936.64,
        percent: 605.74,
        debt: 330.9,
        balance: 75631.55,
      },
      {
        payment: 936.64,
        percent: 603.1,
        debt: 333.54,
        balance: 75298.01,
      },
      {
        payment: 936.64,
        percent: 600.44,
        debt: 336.2,
        balance: 74961.81,
      },
      {
        payment: 936.64,
        percent: 597.76,
        debt: 338.88,
        balance: 74622.92,
      },
      {
        payment: 936.64,
        percent: 595.05,
        debt: 341.59,
        balance: 74281.34,
      },
      {
        payment: 936.64,
        percent: 592.33,
        debt: 344.31,
        balance: 73937.03,
      },
      {
        payment: 936.64,
        percent: 589.58,
        debt: 347.06,
        balance: 73589.97,
      },
      {
        payment: 936.64,
        percent: 586.82,
        debt: 349.82,
        balance: 73240.15,
      },
      {
        payment: 936.64,
        percent: 584.03,
        debt: 352.61,
        balance: 72887.54,
      },
      {
        payment: 936.64,
        percent: 581.22,
        debt: 355.42,
        balance: 72532.11,
      },
      {
        payment: 936.64,
        percent: 578.38,
        debt: 358.26,
        balance: 72173.85,
      },
      {
        payment: 936.64,
        percent: 575.52,
        debt: 361.12,
        balance: 71812.74,
      },
      {
        payment: 936.64,
        percent: 572.64,
        debt: 363.99,
        balance: 71448.74,
      },
      {
        payment: 936.64,
        percent: 569.74,
        debt: 366.9,
        balance: 71081.85,
      },
      {
        payment: 936.64,
        percent: 566.82,
        debt: 369.82,
        balance: 70712.02,
      },
      {
        payment: 936.64,
        percent: 563.87,
        debt: 372.77,
        balance: 70339.25,
      },
      {
        payment: 936.64,
        percent: 560.9,
        debt: 375.74,
        balance: 69963.51,
      },
      {
        payment: 936.64,
        percent: 557.9,
        debt: 378.74,
        balance: 69584.77,
      },
      {
        payment: 936.64,
        percent: 554.88,
        debt: 381.76,
        balance: 69203.01,
      },
      {
        payment: 936.64,
        percent: 551.83,
        debt: 384.81,
        balance: 68818.2,
      },
      {
        payment: 936.64,
        percent: 548.77,
        debt: 387.87,
        balance: 68430.33,
      },
      {
        payment: 936.64,
        percent: 545.67,
        debt: 390.97,
        balance: 68039.36,
      },
      {
        payment: 936.64,
        percent: 542.56,
        debt: 394.08,
        balance: 67645.28,
      },
      {
        payment: 936.64,
        percent: 539.41,
        debt: 397.23,
        balance: 67248.05,
      },
      {
        payment: 936.64,
        percent: 536.25,
        debt: 400.39,
        balance: 66847.66,
      },
      {
        payment: 936.64,
        percent: 533.05,
        debt: 403.59,
        balance: 66444.07,
      },
      {
        payment: 936.64,
        percent: 529.83,
        debt: 406.81,
        balance: 66037.26,
      },
      {
        payment: 936.64,
        percent: 526.59,
        debt: 410.05,
        balance: 65627.22,
      },
      {
        payment: 936.64,
        percent: 523.32,
        debt: 413.32,
        balance: 65213.9,
      },
      {
        payment: 936.64,
        percent: 520.02,
        debt: 416.61,
        balance: 64797.28,
      },
      {
        payment: 936.64,
        percent: 516.7,
        debt: 419.94,
        balance: 64377.35,
      },
      {
        payment: 936.64,
        percent: 513.35,
        debt: 423.29,
        balance: 63954.06,
      },
      {
        payment: 936.64,
        percent: 509.98,
        debt: 426.66,
        balance: 63527.4,
      },
      {
        payment: 936.64,
        percent: 506.58,
        debt: 430.06,
        balance: 63097.34,
      },
      {
        payment: 936.64,
        percent: 503.15,
        debt: 433.49,
        balance: 62663.84,
      },
      {
        payment: 936.64,
        percent: 499.69,
        debt: 436.95,
        balance: 62226.89,
      },
      {
        payment: 936.64,
        percent: 496.21,
        debt: 440.43,
        balance: 61786.46,
      },
      {
        payment: 936.64,
        percent: 492.69,
        debt: 443.95,
        balance: 61342.51,
      },
      {
        payment: 936.64,
        percent: 489.15,
        debt: 447.49,
        balance: 60895.03,
      },
      {
        payment: 936.64,
        percent: 485.59,
        debt: 451.05,
        balance: 60443.97,
      },
      {
        payment: 936.64,
        percent: 481.99,
        debt: 454.65,
        balance: 59989.32,
      },
      {
        payment: 936.64,
        percent: 478.36,
        debt: 458.28,
        balance: 59531.05,
      },
      {
        payment: 936.64,
        percent: 474.71,
        debt: 461.93,
        balance: 59069.12,
      },
      {
        payment: 936.64,
        percent: 471.03,
        debt: 465.61,
        balance: 58603.5,
      },
      {
        payment: 936.64,
        percent: 467.31,
        debt: 469.33,
        balance: 58134.18,
      },
      {
        payment: 936.64,
        percent: 463.57,
        debt: 473.07,
        balance: 57661.11,
      },
      {
        payment: 936.64,
        percent: 459.8,
        debt: 476.84,
        balance: 57184.26,
      },
      {
        payment: 936.64,
        percent: 456,
        debt: 480.64,
        balance: 56703.62,
      },
      {
        payment: 936.64,
        percent: 452.16,
        debt: 484.48,
        balance: 56219.14,
      },
      {
        payment: 936.64,
        percent: 448.3,
        debt: 488.34,
        balance: 55730.8,
      },
      {
        payment: 936.64,
        percent: 444.41,
        debt: 492.23,
        balance: 55238.57,
      },
      {
        payment: 936.64,
        percent: 440.48,
        debt: 496.16,
        balance: 54742.41,
      },
      {
        payment: 936.64,
        percent: 436.52,
        debt: 500.12,
        balance: 54242.29,
      },
      {
        payment: 936.64,
        percent: 432.54,
        debt: 504.1,
        balance: 53738.19,
      },
      {
        payment: 936.64,
        percent: 428.52,
        debt: 508.12,
        balance: 53230.07,
      },
      {
        payment: 936.64,
        percent: 424.46,
        debt: 512.18,
        balance: 52717.89,
      },
      {
        payment: 936.64,
        percent: 420.38,
        debt: 516.26,
        balance: 52201.63,
      },
      {
        payment: 936.64,
        percent: 416.26,
        debt: 520.38,
        balance: 51681.25,
      },
      {
        payment: 936.64,
        percent: 412.11,
        debt: 524.53,
        balance: 51156.73,
      },
      {
        payment: 936.64,
        percent: 407.93,
        debt: 528.71,
        balance: 50628.02,
      },
      {
        payment: 936.64,
        percent: 403.71,
        debt: 532.92,
        balance: 50095.1,
      },
      {
        payment: 936.64,
        percent: 399.47,
        debt: 537.17,
        balance: 49557.92,
      },
      {
        payment: 936.64,
        percent: 395.18,
        debt: 541.46,
        balance: 49016.46,
      },
      {
        payment: 936.64,
        percent: 390.86,
        debt: 545.78,
        balance: 48470.69,
      },
      {
        payment: 936.64,
        percent: 386.51,
        debt: 550.13,
        balance: 47920.56,
      },
      {
        payment: 936.64,
        percent: 382.13,
        debt: 554.51,
        balance: 47366.05,
      },
      {
        payment: 936.64,
        percent: 377.7,
        debt: 558.94,
        balance: 46807.11,
      },
      {
        payment: 936.64,
        percent: 373.25,
        debt: 563.39,
        balance: 46243.72,
      },
      {
        payment: 936.64,
        percent: 368.75,
        debt: 567.89,
        balance: 45675.83,
      },
      {
        payment: 936.64,
        percent: 364.23,
        debt: 572.41,
        balance: 45103.42,
      },
      {
        payment: 936.64,
        percent: 359.66,
        debt: 576.98,
        balance: 44526.44,
      },
      {
        payment: 936.64,
        percent: 355.06,
        debt: 581.58,
        balance: 43944.86,
      },
      {
        payment: 936.64,
        percent: 350.42,
        debt: 586.22,
        balance: 43358.64,
      },
      {
        payment: 936.64,
        percent: 345.75,
        debt: 590.89,
        balance: 42767.75,
      },
      {
        payment: 936.64,
        percent: 341.04,
        debt: 595.6,
        balance: 42172.15,
      },
      {
        payment: 936.64,
        percent: 336.29,
        debt: 600.35,
        balance: 41571.79,
      },
      {
        payment: 936.64,
        percent: 331.5,
        debt: 605.14,
        balance: 40966.65,
      },
      {
        payment: 936.64,
        percent: 326.67,
        debt: 609.97,
        balance: 40356.69,
      },
      {
        payment: 936.64,
        percent: 321.81,
        debt: 614.83,
        balance: 39741.86,
      },
      {
        payment: 936.64,
        percent: 316.91,
        debt: 619.73,
        balance: 39122.13,
      },
      {
        payment: 936.64,
        percent: 311.97,
        debt: 624.67,
        balance: 38497.45,
      },
      {
        payment: 936.64,
        percent: 306.98,
        debt: 629.66,
        balance: 37867.8,
      },
      {
        payment: 936.64,
        percent: 301.96,
        debt: 634.68,
        balance: 37233.12,
      },
      {
        payment: 936.64,
        percent: 296.9,
        debt: 639.74,
        balance: 36593.38,
      },
      {
        payment: 936.64,
        percent: 291.8,
        debt: 644.84,
        balance: 35948.54,
      },
      {
        payment: 936.64,
        percent: 286.66,
        debt: 649.98,
        balance: 35298.56,
      },
      {
        payment: 936.64,
        percent: 281.48,
        debt: 655.16,
        balance: 34643.4,
      },
      {
        payment: 936.64,
        percent: 276.25,
        debt: 660.39,
        balance: 33983.01,
      },
      {
        payment: 936.64,
        percent: 270.99,
        debt: 665.65,
        balance: 33317.36,
      },
      {
        payment: 936.64,
        percent: 265.68,
        debt: 670.96,
        balance: 32646.4,
      },
      {
        payment: 936.64,
        percent: 260.33,
        debt: 676.31,
        balance: 31970.08,
      },
      {
        payment: 936.64,
        percent: 254.93,
        debt: 681.71,
        balance: 31288.38,
      },
      {
        payment: 936.64,
        percent: 249.5,
        debt: 687.14,
        balance: 30601.24,
      },
      {
        payment: 936.64,
        percent: 244.02,
        debt: 692.62,
        balance: 29908.61,
      },
      {
        payment: 936.64,
        percent: 238.5,
        debt: 698.14,
        balance: 29210.47,
      },
      {
        payment: 936.64,
        percent: 232.93,
        debt: 703.71,
        balance: 28506.76,
      },
      {
        payment: 936.64,
        percent: 227.32,
        debt: 709.32,
        balance: 27797.44,
      },
      {
        payment: 936.64,
        percent: 221.66,
        debt: 714.98,
        balance: 27082.46,
      },
      {
        payment: 936.64,
        percent: 215.96,
        debt: 720.68,
        balance: 26361.78,
      },
      {
        payment: 936.64,
        percent: 210.21,
        debt: 726.43,
        balance: 25635.35,
      },
      {
        payment: 936.64,
        percent: 204.42,
        debt: 732.22,
        balance: 24903.13,
      },
      {
        payment: 936.64,
        percent: 198.58,
        debt: 738.06,
        balance: 24165.07,
      },
      {
        payment: 936.64,
        percent: 192.7,
        debt: 743.94,
        balance: 23421.13,
      },
      {
        payment: 936.64,
        percent: 186.76,
        debt: 749.88,
        balance: 22671.25,
      },
      {
        payment: 936.64,
        percent: 180.78,
        debt: 755.86,
        balance: 21915.4,
      },
      {
        payment: 936.64,
        percent: 174.76,
        debt: 761.88,
        balance: 21153.51,
      },
      {
        payment: 936.64,
        percent: 168.68,
        debt: 767.96,
        balance: 20385.55,
      },
      {
        payment: 936.64,
        percent: 162.56,
        debt: 774.08,
        balance: 19611.47,
      },
      {
        payment: 936.64,
        percent: 156.38,
        debt: 780.25,
        balance: 18831.22,
      },
      {
        payment: 936.64,
        percent: 150.16,
        debt: 786.48,
        balance: 18044.74,
      },
      {
        payment: 936.64,
        percent: 143.89,
        debt: 792.75,
        balance: 17251.99,
      },
      {
        payment: 936.64,
        percent: 137.57,
        debt: 799.07,
        balance: 16452.92,
      },
      {
        payment: 936.64,
        percent: 131.2,
        debt: 805.44,
        balance: 15647.48,
      },
      {
        payment: 936.64,
        percent: 124.78,
        debt: 811.86,
        balance: 14835.62,
      },
      {
        payment: 936.64,
        percent: 118.3,
        debt: 818.34,
        balance: 14017.28,
      },
      {
        payment: 936.64,
        percent: 111.78,
        debt: 824.86,
        balance: 13192.41,
      },
      {
        payment: 936.64,
        percent: 105.2,
        debt: 831.44,
        balance: 12360.97,
      },
      {
        payment: 936.64,
        percent: 98.57,
        debt: 838.07,
        balance: 11522.9,
      },
      {
        payment: 936.64,
        percent: 91.89,
        debt: 844.75,
        balance: 10678.15,
      },
      {
        payment: 936.64,
        percent: 85.15,
        debt: 851.49,
        balance: 9826.66,
      },
      {
        payment: 936.64,
        percent: 78.36,
        debt: 858.28,
        balance: 8968.38,
      },
      {
        payment: 936.64,
        percent: 71.52,
        debt: 865.12,
        balance: 8103.25,
      },
      {
        payment: 936.64,
        percent: 64.62,
        debt: 872.02,
        balance: 7231.23,
      },
      {
        payment: 936.64,
        percent: 57.66,
        debt: 878.98,
        balance: 6352.25,
      },
      {
        payment: 936.64,
        percent: 50.65,
        debt: 885.99,
        balance: 5466.27,
      },
      {
        payment: 936.64,
        percent: 43.59,
        debt: 893.05,
        balance: 4573.22,
      },
      {
        payment: 936.64,
        percent: 36.47,
        debt: 900.17,
        balance: 3673.04,
      },
      {
        payment: 936.64,
        percent: 29.29,
        debt: 907.35,
        balance: 2765.69,
      },
      {
        payment: 936.64,
        percent: 22.05,
        debt: 914.59,
        balance: 1851.11,
      },
      {
        payment: 936.64,
        percent: 14.76,
        debt: 921.88,
        balance: 929.23,
      },
      {
        payment: 936.64,
        percent: 7.41,
        debt: 929.23,
        balance: 0,
      },
    ],
  },
};
