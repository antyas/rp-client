import { ref, computed } from 'vue';
import { log } from './utils/logger';

export enum EModal {
  None,
  CharacterDelete,
}

const activeModal = ref(EModal.None);

const setModal = (modal: EModal): void => {
  log('setModal', modal);
  activeModal.value = modal;
};

const createModalSwitcher = (modal: EModal) => (flag: boolean) =>
  flag ? setModal(modal) : setModal(EModal.None);

export const useModal = (modal: EModal) => ({
  isActive: computed(() => activeModal.value === modal),
  switch: createModalSwitcher(modal),
})

