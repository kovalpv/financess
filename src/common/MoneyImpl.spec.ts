/* eslint-disable max-len */
import MoneyImpl from "./MoneyImpl";
import PercentImpl from "./PercentImpl";

describe("Money", () => {
  describe("constructor", () => {
    test("should create Money", () => {
      const money = new MoneyImpl(0);

      expect(money).not.toBeNull();
      expect(money.getValue()).toEqual(0);
    });

    test("should create Money with 100 value", () => {
      const money = new MoneyImpl(100);

      expect(money).not.toBeNull();
      expect(money.getValue()).toEqual(100);
    });

    test("should ___123", () => {
      const actual = new MoneyImpl(5.75);
      const expected = 5.75;

      expect(expected).toEqual(actual.getValue());
    });
  });

  describe("method getValue", () => {
    test("should return 100.00 when create with 100", () => {
      const money = new MoneyImpl(100);
      expect(money.getValue()).toBeCloseTo(100, 2);
    });

    test("should return 100.24 when add 100.244", () => {
      const money = new MoneyImpl(100.244);
      expect(money.getValue()).toBeCloseTo(100.24, 2);
    });
    test("should return 100.25 when add 100.25", () => {
      const money = new MoneyImpl(100.25);
      expect(money.getValue()).toBeCloseTo(100.25, 2);
    });

    test("should return 139.23 when create with 139.23", () => {
      const money = new MoneyImpl(139.23);
      expect(money.getValue()).toBeCloseTo(139.23, 2);
    });

    test("should return 936.64 when create with 936.639542662622", () => {
      const money = new MoneyImpl(936.639542662622);
      expect(money.getValue()).toBeCloseTo(936.64, 2);
    });
  });

  describe("method add", () => {
    test("should return 1000.46 when subsctract from 500.24 value 500.22", () => {
      const first = new MoneyImpl(500.24);
      const second = new MoneyImpl(500.22);

      const result = first.add(second);

      expect(first.getValue()).toEqual(500.24);
      expect(second.getValue()).toEqual(500.22);
      expect(result.getValue()).toEqual(1000.46);
    });

    test("should return 32.01 when 31.01 added 1", () => {
      const first = new MoneyImpl(31.01);
      const second = new MoneyImpl(1);

      const result = first.add(second);

      expect(first.getValue()).toEqual(31.01);
      expect(second.getValue()).toEqual(1);
      expect(result.getValue()).toEqual(32.01);
    });

    test("should return 32.01 when 32.010000000000005 added 1", () => {
      const first = new MoneyImpl(31.01);
      const second = new MoneyImpl(1);

      const result = first.add(second);

      expect(first.getValue()).toEqual(31.01);
      expect(second.getValue()).toEqual(1);
      expect(result.getValue()).toEqual(32.01);
    });
  });

  describe("method substract", () => {
    test("should return 500.24 when subsctract from 1000.46 value 500.22", () => {
      const first = new MoneyImpl(1000.46);
      const second = new MoneyImpl(500.22);

      const result = first.substract(second);

      expect(first.getValue()).toEqual(1000.46);
      expect(second.getValue()).toEqual(500.22);
      expect(result.getValue()).toEqual(500.24);
    });
  });

  describe("method multiply", () => {
    test("should return 7051 when money 100 multiply by 70.51", () => {
      const money = new MoneyImpl(100);

      const result = money.multiply(70.51);

      expect(money.getValue()).toEqual(100);
      expect(result.getValue()).toEqual(7051);
    });

    test("should return 7051 when money 70.51 multiply by 100", () => {
      const money = new MoneyImpl(70.51);

      const result = money.multiply(100);

      expect(money.getValue()).toEqual(70.51);
      expect(result.getValue()).toEqual(7051);
    });
  });
  describe("method divide", () => {
    test("should return 100 when money 7051 divide by 70.51", () => {
      const money = new MoneyImpl(7051);

      expect(money.divide(70.51).getValue()).toEqual(100);
    });

    test("should return 70.51 when money 7051 divide by 100", () => {
      const money = new MoneyImpl(7051);

      expect(money.divide(100).getValue()).toEqual(70.51);
    });
  });

  describe("method percent", () => {
    test("should return 87 when money 100 get 87%", () => {
      const money = new MoneyImpl(100);

      const percent = new PercentImpl(87);
      expect(money.percent(percent).getValue()).toEqual(87);
    });

    test("should return 5.75 when money 100 get 5.75%", () => {
      const money = new MoneyImpl(100);

      const percent = new PercentImpl(5.75);
      expect(money.percent(percent)).toEqual(new MoneyImpl(5.75));
    });
  });
});
