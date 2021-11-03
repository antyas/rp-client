import { Game } from '@/shared/api/game';
import { defineStore } from 'pinia';

interface GameStoreState {
  list: Game[],
  active: Game | null,
}

export const useGameStore = defineStore('game', {
  state: (): GameStoreState => ({
    list: [],
    active: null,
  }),
});