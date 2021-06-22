import * as ls from '../core/ls';

const collection = 'characters';

export const createCharacter = async (character: Character) =>
  ls.add<Character>(collection, character);

export const updateCharacter = async (character: Character) =>
  ls.update<Character>(collection, character)

export const deleteCharacter = async (id: number) =>
  ls.remove(collection, id);

export const getAllCharacters = async () =>
  ls.load<Character>(collection);

export const getOneCharacter = async (id: number) => 
  ls.findOne<Character>(collection, id);