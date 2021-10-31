import { defineStore } from 'pinia';
import * as api from '../api';
import { CharacterAge, SocialStatus } from '../types';

interface CharacterStoreState {
  ages: CharacterAge[],
  statuses: SocialStatus[],
}

export const useCharacterStore = defineStore('character', {
  state: (): CharacterStoreState => ({
    ages: [],
    statuses: [],
  }),
  actions: {
    async init() {
      this.ages = await api.loadAges();
      this.statuses = await api.loadSocialStatuses();
    },
  }
});