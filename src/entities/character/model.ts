import { computed } from 'vue';
import { removeByProp, updateOneByProp } from '@/shared/lib/array';
import { useLogger } from '@/shared/hooks/logger';
import { useLocalStorageCollection } from '@/shared/hooks/ls';

const logger = useLogger('characters');
const collection = useLocalStorageCollection('characters');

let active: Character = { id: -1 };
let list: Character[] = [];

const deleteById = async (id: number) => {
  logger.print('deleteById', id);
  collection.remove(id);
  list = removeByProp('id', id, list);
};

const clearActive = async () => {
  logger.print('clearActive', active);
  active = { id: -1 };
};

const deleteActive = async () => {
  deleteById(active.id);
  clearActive();
};

const updateActive = async () => {
  logger.print('updateActive', active);
  list = updateOneByProp('id', active, list);
  collection.update(active);
};

const create = async (character: Character) => {
  logger.print('create', character);
  list.unshift(character);
  collection.add(character);
}

const setActive = async (character: Character) => { 
  logger.print('setActive', character);
  active = character;
};

export const initCharacters = async () => {
  list = collection.all();
  logger.print('init', list);
};

export const useCharacters = () => ({
  list: computed(() => list),
  deleteById,
  setActive,
  create
});

export const useCharacter = () => ({
  active: computed(() => active),
  remove: deleteActive,
  update: updateActive,
  clear: clearActive,
  set: setActive
});
