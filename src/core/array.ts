export const findOneByProp = <T>(prop: keyof T, value: any, array: T[]) =>
  array.find(item => item[prop] === value);

export const findByProp = <T>(prop: keyof T, value: any, array: T[]) =>
  array.filter(item => item[prop] === value);

export const removeByProp = <T>(prop: keyof T, value: any, array: T[]) =>
  array.filter(item => item[prop] !== value);

export const updateOneByProp = <T>(prop: keyof T, item: T, array: T[]) => {
  removeByProp(prop, item[prop], array);
  array.push(item);
  return array;
}
