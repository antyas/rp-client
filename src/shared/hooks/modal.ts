import { ref, computed } from 'vue';


export enum EModal {
  None = 'none',
  CharacterDelete = 'character-delete',
}

const activeModal = ref(EModal.None);

const setModal = (modal: EModal): void => {
  activeModal.value = modal;
};

const createModalSwitcher = (modal: EModal) => (flag: boolean) =>
  flag ? setModal(modal) : setModal(EModal.None);

export const useModal = (modal: EModal) => ({
  isOpen: computed(() => activeModal.value === modal),
  switchModal: createModalSwitcher(modal),
})

