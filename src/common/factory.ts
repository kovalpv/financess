/* eslint-disable class-methods-use-this */
import {
  Factory,
  Money, MoneyValueType, Percent, PercentValueType
} from "../interfaces";
import MoneyImpl from "./MoneyImpl";
import PercentImpl from "./PercentImpl";

class FactoryImpl implements Factory {
  public createMoney(value: MoneyValueType): Money {
    return new MoneyImpl(value);
  }

  public createPercent(persent: PercentValueType): Percent {
    return new PercentImpl(persent);
  }
}

const factory = new FactoryImpl();

export default factory;
