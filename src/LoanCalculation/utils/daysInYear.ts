const MILLISECONDS_IN_DAY = 86_400_000;

export default function daysInYear(date: Date): number {
  const d1 = new Date(date.getFullYear(), 0, 1);
  const d2 = new Date(date.getFullYear() + 1, 0, 1);

  return (d2.getTime() - d1.getTime()) / MILLISECONDS_IN_DAY;
}
