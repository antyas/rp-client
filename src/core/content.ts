import classes from '@/content/classes';
import races from '@/content/races';
import { findByProp, findOneByProp, unshift } from './utils/array';

export enum EContent {
  Classes,
  Races,
}

export type Content = CharacterClass | CharacterRace;

const getContent = <T extends Content>(content: EContent): T[] => {
  switch (content) {
    case EContent.Classes: return classes as T[];
    case EContent.Races: return races as T[];
  }
}

export const useContent = <T extends Content>(content: EContent) => {
  const list = getContent<T>(content);
  
  return {
    list,
    get: (id: number) => findOneByProp<T>('id', id, list),
    find: (prop: keyof T, value: any) => findByProp(prop, value, list),
  }
}