import { defineStore } from 'pinia';
import { CharacterAge, SocialStatus } from '@/shared/api/content';
import { unshift } from '@/shared/lib/array';

interface ContentStoreState {
  ages: CharacterAge[],
  statuses: SocialStatus[],
}

export const defaultOption: ContentSelectOption = { name: 'Случайно', id: -1 };

export const useContentStore = defineStore('content', {
  state: (): ContentStoreState => ({
    ages: [],
    statuses: [],
  }),
  getters: {
    ageOptions: (state) => unshift(defaultOption, state.ages),
    statusOptions: (state) => unshift(defaultOption, state.statuses),
  }
});