import { ref, reactive, readonly } from 'vue';
import { removeByProp, updateOneByProp } from './utils/array';
import { useLogger } from './logger';
import { useLocalStorageCollection } from './ls';

const logger = useLogger('characters');
const collection = useLocalStorageCollection('characters');

let active = reactive<Character>({ id: -1 });
const list = ref<Character[]>([]);

const deleteById = async (id: number) => {
  logger.print('deleteById', id);
  collection.remove(id);
  list.value = removeByProp('id', id, list.value);
};

const clearActive = async () => {
  logger.print('clearActive', active);
  active = reactive<Character>({ id: -1 });
};

const deleteActive = async () => {
  deleteById(active.id);
  clearActive();
};

const updateActive = async () => {
  logger.print('updateActive', active);
  list.value = updateOneByProp('id', active, list.value);
  collection.update(active);
};

const create = async (character: Character) => {
  logger.print('create', character);
  list.value.unshift(character);
  collection.add(character);
}

const setActive = async (character: Character) => { 
  logger.print('setActive', character);
  active = reactive<Character>(character) 
};

export const initCharacters = async () => {
  list.value = collection.all();
  logger.print('init', list.value);
};

export const useCharacters = () => ({
  list: readonly(list),
  deleteById,
  setActive,
  create
});

export const useCharacter = () => ({
  active: readonly(active),
  remove: deleteActive,
  update: updateActive,
  clear: clearActive,
  set: setActive
});
