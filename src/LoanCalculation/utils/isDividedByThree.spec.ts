import isDividedByThree from "./isDividedByThree";

describe("isDividedByThree", () => {
  test("should return true if value is equals 3", () => {
    const value = isDividedByThree(3);
    expect(value).toBeTruthy();
  });

  test("should return false if value is equals 0", () => {
    expect(isDividedByThree(0)).toBeFalsy();
  });

  test("should return false if value is equals 1", () => {
    expect(isDividedByThree(1)).toBeFalsy();
  });
  test("should return false if value is equals 2", () => {
    expect(isDividedByThree(2)).toBeFalsy();
  });
});
