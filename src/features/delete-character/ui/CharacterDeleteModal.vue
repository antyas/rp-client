<template lang="pug">
w-dialog(
  :model-value="isOpen"
  title="Точно хочешь удалить персонажа?"
  persistent
  :width="550"
  @input="switchModal"
) {{ active.name }} будет удален безвозвратно
  template(#actions)
    .spacer
    w-button.mr2(bg-color="error" @click="switchModal(false)") Нет
    w-button(bg-color="success" @click="removeCharacter") Да
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModal, EModal } from '@/shared/hooks/modal';
import { useCharacter } from '@/entities/character/model';

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