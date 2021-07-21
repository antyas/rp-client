import { findOneByProp, removeByProp, updateOneByProp } from './utils/array';

interface ILSItem {
  id: number;
}

const save = <T extends ILSItem>(key: string, data: T[]) =>
  localStorage.setItem(key, JSON.stringify(data));

const load = <T extends ILSItem>(key: string): T[] =>
  JSON.parse(localStorage.getItem(key) || '[]');

const increment = (name: string): number => {
  const key = `${name}-last-id`;
  const lastId = Number(localStorage.getItem(key) || -1);
  const id = lastId + 1;
  localStorage.setItem(key, id.toString());
  return id;
}

const add = <T extends ILSItem>(name: string, item: T) => {
  const list = load(name);
  const id = increment(name);

  item.id = id;
  list.push(item);
  save(name, list);

  return item;
}

const update = <T extends ILSItem>(name: string, item: T) => {
  const list = updateOneByProp('id', item, load(name));
  save(name, list);
  return item;
}

const remove = (name: string, id: number) => {
  const list = removeByProp('id', id, load(name));
  save(name, list);
}

const findOne = <T extends ILSItem>(name: string, id: number): T | undefined => 
  findOneByProp('id', id, load(name));

export const useLocalStorageCollection = (name: string) => ({
  save: <T extends ILSItem>(list: T[]) => save<T>(name, list),
  all: <T extends ILSItem>() => load<T>(name),
  add: <T extends ILSItem>(item: T) => add<T>(name, item),
  update: <T extends ILSItem>(item: T) => update<T>(name, item),
  remove: (id: number) => remove(name, id),
  getOne: <T extends ILSItem>(id: number) => findOne<T>(name, id),
});

export const useLocalStorage = () => ({
  set: (key: string, data: string) => localStorage.setItem(key, data),
  get: (key: string) => localStorage.getItem(key),
});