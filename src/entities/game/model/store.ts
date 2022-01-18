import type { Game } from '@/shared/api/game';
import { defineStore } from 'pinia';

interface GameStoreState {
  list: Game[],
  code: string,
}

export const useStore = defineStore('game', {
  state: (): GameStoreState => ({
    list: [],
    code: '',
  }),

  getters: {
    active(state): Game | undefined {
      return state.list.find(game => game.code === state.code);
    },
  }
});