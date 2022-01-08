import Decimal from "decimal.js";

import { Percent, PercentValueType } from "../interfaces";

export default class PercentImpl implements Percent {
  private percent: Decimal;

  constructor(value: PercentValueType) {
    this.percent = new Decimal(value).dividedBy(100);
  }

  public getValue(): number {
    return this.percent.toNumber();
  }

  public apply(value: number): number {
    return this.percent.mul(new Decimal(value)).toNumber();
  }

  public addValue(value: number): Percent {
    return new PercentImpl(
      new Decimal(value).add(this.percent.mul(100)).toNumber()
    );
  }

  protected setPercent(percent: Decimal): PercentImpl {
    this.percent = percent;
    return this;
  }

  pow(value: number): Percent {
    return new PercentImpl(0).setPercent(this.percent.pow(value));
  }
}
