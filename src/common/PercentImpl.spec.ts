import PercentImpl from "./PercentImpl";

describe("Percent", () => {
  test("should crete percent", () => {
    const percent = new PercentImpl(99);

    expect(percent).not.toBeNull();
  });

  test("should return 0.99 when create 99 percent", () => {
    const percent = new PercentImpl(99);

    expect(percent.getValue()).toEqual(0.99);
  });

  describe("method apply", () => {
    test("should return 87 when 100 apply 87 percent", () => {
      const percent = new PercentImpl(87);

      expect(percent.apply(100)).toEqual(87);
    });

    test("should return 86.4 when 576 apply 15 percent", () => {
      const percent = new PercentImpl(15);

      expect(percent.apply(576)).toEqual(86.4);
    });
  });

  describe("method add", () => {
    test("should return 1.1 when Percent(10).add(100)", () => {
      const percent = new PercentImpl(10);

      const newPercent = percent.addValue(100);
      expect(percent.getValue()).toEqual(0.1);
      expect(newPercent.getValue()).toEqual(1.1);
    });
  });
});
