import { findOneByProp, removeByProp, updateOneByProp } from "./array";

interface ILSItem {
  id: number;
}

export const save = <T extends ILSItem>(key: string, data: T[]) =>
  localStorage.setItem(key, JSON.stringify(data));

export const load = <T extends ILSItem>(key: string): T[] =>
  JSON.parse(localStorage.getItem(key) || '[]');

export function increment(name: string): number {
  const key = `${name}-last-id`;
  const lastId = Number(localStorage.getItem(key) || -1);
  const id = lastId + 1;
  localStorage.setItem(key, id.toString());
  return id;
}

export function add<T extends ILSItem>(name: string, item: T) {
  const list = load(name);
  const id = increment(name);

  item.id = id;
  list.push(item);
  save(name, list);

  return item;
}

export function update<T extends ILSItem>(name: string, item: T) {
  const list = updateOneByProp('id', item, load(name));
  save(name, list);
  return item;
}

export function remove(name: string, id: number) {
  const list = removeByProp('id', id, load(name));
  save(name, list);
}

export const findOne = <T extends ILSItem>(name: string, id: number): T | undefined => 
  findOneByProp('id', id, load(name));