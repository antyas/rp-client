import type { CharacterAge, SocialStatus } from "../content";
import { useLocalStorageCollection } from '@/shared/lib/ls';
import { append, assoc, find, findIndex, prepend, propEq, remove } from 'ramda';

export type Character = {
  id: number,
  name: string,
  gameCode: string,
  atributes: Atribute[],
  // conditions?: Condition[]
  age: CharacterAge,
  socialStatus: SocialStatus,
};

export type NewCharacter = Omit<Character, 'id'>;

const collection = useLocalStorageCollection<Character>('characters');

export const characterService = {
  async create(nc: NewCharacter): Promise<Character> {
    const character: Character = assoc('id', collection.increment(), nc);
    collection.set(append(character, collection.get()));
    return character;
  },

  async update(character: Character): Promise<Character> {
    const index = findIndex(propEq('id', character.id), collection.get());

    const list = ~index ? remove(index, 1, collection.get()) : collection.get();
    collection.set(prepend(character, list));

    return character;
  },

  async remove(id: number): Promise<void> {
    const index = findIndex(propEq('id', id), collection.get());

    if (!~index) {
      collection.set(remove(index, 1, collection.get()));
    }
  },

  async fetch(): Promise<Character[]> {
    return collection.get();
  },

  async fetchOne(id: number): Promise<Character | null> {
    return find(propEq('id', id), collection.get()) || null;
  },
};
