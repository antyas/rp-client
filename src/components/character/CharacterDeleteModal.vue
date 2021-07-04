<template>
  <w-dialog
    :model-value="isOpen"
    title="Точно хочешь удалить персонажа?"
    persistent
    :width="550"
    @input="switchModal"
  >
    {{ active.name }} будет удален безвозвратно
    <template #actions>
      <div class="spacer" />
      <w-button class="mr2" bg-color="error" @click="switchModal(false)">Нет</w-button>
      <w-button bg-color="success" @click="removeCharacter">Да</w-button>
    </template>
  </w-dialog>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModal, EModal } from '@/core/modal';
import { useCharacter } from '@/core/characters';

const { active, remove } = useCharacter();
const { switchModal, isOpen } = useModal(EModal.CharacterDelete);

const removeCharacter = () => {
  switchModal(false);
  remove();
};

export default defineComponent(() => ({
  active,
  isOpen,
  switchModal,
  removeCharacter,
}));
</script>