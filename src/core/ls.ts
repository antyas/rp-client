interface IListItem {
  id: number;
}

type ListEntries<T extends IListItem> = Array<[number, T]>

class List<T extends IListItem> extends Map<number, T> {};

export const set = <T extends IListItem>(key: string, data: ListEntries<T>): void =>
  localStorage.setItem(key, JSON.stringify(data));

export const get = <T extends IListItem>(key: string): ListEntries<T> =>
  JSON.parse(localStorage.getItem(key) || '[]');

export const load = <T extends IListItem>(name: string): List<T> =>
  new List<T>(get<T>(name))

export const save = <T extends IListItem>(name: string, data: List<T>): void =>
  set<T>(name, Array.from(data));

export function increment(name: string): number {
  const key = `${name}-last-id`;
  const lastId = Number(localStorage.getItem(key) || -1);
  const id = lastId + 1;
  localStorage.setItem(key, id.toString());
  return id;
}

export function add<T extends IListItem>(name: string, item: T): T {
  const list = load(name);
  const id = increment(name);

  item.id = id;
  list.set(id, item);
  save(name, list);

  return item;
}

export function update<T extends IListItem>(name: string, item: T) {
  const list = load(name);
  list.set(item.id, item);
  save(name, list);
  return item;
}

export function remove(name: string, id: number) {
  const list = load(name);
  list.delete(id);
  save(name, list);
}

export function all<T extends IListItem>(name: string): T[] {
  return get(name).map(([id, value]) => value);
}

function one(collection, id) {
  return load(collection).get(id);
}