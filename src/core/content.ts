import classes from '@/content/classes';
import races from '@/content/races';
import ages from '@/content/ages';
import socialStatuses from '@/content/social-statuses';
import { findByProp, findOneByProp } from './utils/array';

export enum EContent {
  Classes,
  Races,
  Ages,
  SocialStatuses,
}

export type Content = (
  CharacterClass 
  | CharacterRace 
  | CharacterAge 
  | CharacterSocialStatus
);

const getContent = <T extends Content>(content: EContent): T[] => {
  switch (content) {
    case EContent.Classes: return classes as T[];
    case EContent.Races: return races as T[];
    case EContent.Ages: return ages as T[];
    case EContent.SocialStatuses: return socialStatuses as T[];
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