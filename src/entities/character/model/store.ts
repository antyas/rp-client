import { removeByProp } from '@/shared/lib/array';
import { defineStore } from 'pinia';
import * as api from '@/shared/api/character';
import type { Character } from '@/shared/api/character';

interface CharacterStoreState {
  list: Character[],
  active: Character | null,
}

export const useCharacterStore = defineStore('character', {
  state: (): CharacterStoreState => ({
    list: [],
    active: null,
  }),
  actions: {
    async init() {
      this.list = await api.getAll();
    },
    async deleteActive() {
      if (this.active) {
        await api.deleteCharacter(this.active.id);
        this.list = removeByProp('id', this.active.id, this.list);
        this.active = null;
      }
    },
    async delete(id: number) {
      await api.deleteCharacter(id);
      this.list = removeByProp('id', id, this.list);
    },
    async create(c: Character) {
      await api.saveCharacter(c);
      this.list.unshift(c);
    },
    async saveActive() {
      if (this.active) {
        await api.updateCharacter(this.active);
      }
    }
  }
});