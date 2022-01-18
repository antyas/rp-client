export type LSCollection<T> = {
  readonly index: number,
  key: string,
  indexKey: string,
  set(list: T[]): void,
  get(): T[],
  increment(): number,
}

export const useLocalStorageString = (key: string) => ({
  set: (data: string) => localStorage.setItem(key, data),
  get: () => localStorage.getItem(key),
});

export const useLocalStorageCollection = <T>(key: string): LSCollection<T> => ({
  key,

  indexKey: `${key}-index`,

  get index() {
    return Number(localStorage.getItem(this.indexKey) || -1);
  },

  increment() {
    const _index = this.index + 1;
    localStorage.setItem(this.indexKey, _index.toString());
    return _index;
  },

  get() {
    return JSON.parse(localStorage.getItem(key) || '[]');
  },

  set(list) {
    localStorage.setItem(key, JSON.stringify(list))
  },
});