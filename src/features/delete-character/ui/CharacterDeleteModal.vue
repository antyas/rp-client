<template lang="pug">
w-dialog(
  :model-value="isOpen"
  title="Точно хочешь удалить персонажа?"
  persistent
  :width="550"
  @input="switchModal"
) {{ characterStore.active?.name || '' }} будет удален безвозвратно
  template(#actions)
    .spacer
    w-button.mr2(bg-color="error" @click="switchModal(false)") Нет
    w-button(bg-color="success" @click="removeCharacter") Да
</template>

<script setup lang="ts">
import { useModal, EModal } from '@/shared/hooks/modal';
import { useCharacterStore } from "@/entities/character";

const characterStore = useCharacterStore();
const { switchModal, isOpen } = useModal(EModal.CharacterDelete);

const removeCharacter = () => {
  switchModal(false);
  characterStore.deleteActive();
};
</script>