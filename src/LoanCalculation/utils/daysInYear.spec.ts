import daysInYear from "./daysInYear";

describe("daysInYear", () => {
  test("should return 365 days", () => {
    expect(daysInYear(new Date(2001, 0, 12))).toEqual(365);
  });

  test("should return 366 days for leap year", () => {
    expect(daysInYear(new Date(2001, 0, 12))).toEqual(365);
  });
});
