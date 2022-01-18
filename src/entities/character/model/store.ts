import { removeByProp } from '@/shared/lib/array';
import { defineStore } from 'pinia';
import { characterService } from '@/shared/api/character';
import type { Character } from '@/shared/api/character';

interface CharacterStoreState {
  list: Character[],
  active: Character | null,
}

export const useStore = defineStore('character', {
  state: (): CharacterStoreState => ({
    list: [],
    active: null,
  }),

  actions: {
    removeById(id: number) {
      this.list = this.list.filter(c => c.id !== id);
    }
  }
});