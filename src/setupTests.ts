export const toBeCloseTo = (
  expected: number,
  actual: number,
  message: string
) => {
  try {
    expect(actual).toBeCloseTo(expected, 2);
  } catch (e) {
    throw new Error(message);
  }
};
