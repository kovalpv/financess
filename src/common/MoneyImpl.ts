import Decimal from "decimal.js";

import { Money, MoneyValueType } from "../interfaces";
import PercentImpl from "./PercentImpl";

export default class MoneyImpl implements Money {
  private value: Decimal;

  constructor(value: MoneyValueType | Decimal) {
    if (typeof value === "number" || value instanceof Number) {
      this.value = new Decimal(value);
      return;
    }
    if (value instanceof Decimal) {
      this.value = value;
      return;
    }
    throw new Error("Money value should be MoneyValueType or Decimal");
  }

  copy(): Money {
    return new MoneyImpl(this.value.toNumber());
  }

  getValue(): MoneyValueType {
    return this.value.toNumber();
  }

  add(money: Money): Money {
    const addMoney = money as MoneyImpl;

    return new MoneyImpl(this.value.add(addMoney.value));
  }

  multiply(value: number): Money {
    return new MoneyImpl(this.value.mul(value));
  }

  divide(value: number): Money {
    return new MoneyImpl(this.value.dividedBy(value));
  }

  substract(value: Money): Money {
    const subtrahend = value as MoneyImpl;

    return new MoneyImpl(this.value.sub(subtrahend.value));
  }

  percent(percent: PercentImpl): Money {
    return new MoneyImpl(this.value.mul(percent.getValue()));
  }
}
