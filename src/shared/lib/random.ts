export function random(min: number, max: number): number {
  const _min = Math.ceil(min);
  const _max = Math.floor(max);
  return Math.floor(Math.random() * (_max - _min + 1)) + _min;
}

export function randomElement<T>(list: T[]): T {
  return list[random(0, list.length - 1)];
}