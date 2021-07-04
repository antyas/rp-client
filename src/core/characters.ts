import { ref, reactive } from 'vue';
import * as service from '@/services/character';
import { removeByProp } from './utils/array';

let active = reactive<Character | {}>({});
const list = ref<Character[]>([]);

service.getAllCharacters().then(c => list.value = c);

const deleteCharacter = (id: number) => {
  service.deleteCharacter(id);
  list.value = removeByProp('id', id, list.value);
  active = reactive<Character | {}>({});
}

export const useCharacter = () => ({
  active,
  remove: deleteCharacter(active.id)
})

