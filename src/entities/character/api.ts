import type { Character } from './types';
import { useLocalStorageCollection } from '@/shared/hooks/ls';

const collection = useLocalStorageCollection('characters');

export const saveCharacter = async (c: Character): Promise<Character> => collection.add(c);
export const updateCharacter = async (c: Character): Promise<Character> => collection.update(c);
export const deleteCharacter = async (id: number): Promise<void> => collection.remove(id);
export const getOne = async (id: number): Promise<Character | null> => collection.getOne(id) || null;
export const getAll = async (): Promise<Character[]> => collection.all();