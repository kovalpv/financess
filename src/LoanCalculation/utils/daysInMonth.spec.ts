import daysInMonth from "./daysInMonth";

describe("daysInMonth", () => {
  test("should return 31 when date is january", () => {
    expect(daysInMonth(new Date(2000, 0, 10))).toEqual(31);
  });

  test("should return 29 when date is february for leap year", () => {
    expect(daysInMonth(new Date(2000, 1, 12))).toEqual(29);
  });

  test("should return 28 when date is february", () => {
    expect(daysInMonth(new Date(2001, 1, 12))).toEqual(28);
  });

  test("should return 30 when date is november", () => {
    expect(daysInMonth(new Date(2000, 10, 12))).toEqual(30);
  });
});
