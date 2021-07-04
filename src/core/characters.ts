import { ref, reactive, readonly } from 'vue';
import * as service from '@/services/character';
import { removeByProp } from './utils/array';

let active = reactive<Character>({ id: -1 });
const list = ref<Character[]>([]);

const deleteById = (id: number) => {
  service.deleteCharacter(id);
  list.value = removeByProp('id', id, list.value);
}



const clearActive = () => active = reactive<Character>({ id: -1 });

const deleteActive = () => {
  deleteById(active.id);
  clearActive();
};

export const init = () => service.getAllCharacters().then(c => list.value = c);

export const useCharacters = () => ({
  list: readonly(list),
  deleteById,
})

export const useCharacter = () => ({
  active: readonly(active),
  remove: deleteActive,
});



