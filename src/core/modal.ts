import { ref, computed } from 'vue';
import { useLogger } from './logger';

const logger = useLogger('modal');

export enum EModal {
  None = 'none',
  CharacterDelete = 'character-delete',
}

const activeModal = ref(EModal.None);

const setModal = (modal: EModal): void => {
  logger.print('setModal', modal);
  activeModal.value = modal;
};

const createModalSwitcher = (modal: EModal) => (flag: boolean) =>
  flag ? setModal(modal) : setModal(EModal.None);

export const useModal = (modal: EModal) => ({
  isOpen: computed(() => activeModal.value === modal),
  switchModal: createModalSwitcher(modal),
})

