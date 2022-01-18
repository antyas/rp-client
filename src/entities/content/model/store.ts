import { defineStore } from 'pinia';
import { CharacterAge, SocialStatus } from '@/shared/api/content';
import { unshift } from '@/shared/lib/array';
import { defaultOption } from './constants';

interface ContentStoreState {
  ages: CharacterAge[],
  statuses: SocialStatus[],
}

export const useStore = defineStore('content', {
  state: (): ContentStoreState => ({
    ages: [],
    statuses: [],
  }),

  getters: {
    ageOptions: (state) => unshift(defaultOption, state.ages),
    statusOptions: (state) => unshift(defaultOption, state.statuses),
  },
});