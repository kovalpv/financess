export default function isDividedByThree(value: number): boolean {
  if (value === 0) return false;
  return value % 3 === 0;
}
