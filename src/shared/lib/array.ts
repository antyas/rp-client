export function find<T>(fn: (x: T) => boolean, list: T[]): T | undefined {
  return list.find(fn);
}

export const findByProp = <T>(prop: keyof T, value: any, array: T[]) =>
  array.filter(item => item[prop] === value);

export const removeByProp = <T>(prop: keyof T, value: any, array: T[]) =>
  array.filter(item => item[prop] !== value);

export const updateOneByProp = <T>(prop: keyof T, item: T, array: T[]) => {
  removeByProp(prop, item[prop], array);
  return unshift(item, array);
}

export const unshift = <T>(item: T, array: T[]) => [item, ...array];
