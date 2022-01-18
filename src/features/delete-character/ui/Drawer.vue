<template lang="pug">
w-drawer(
  :model-value="props.modelValue"
  bottom
  fit-content
  @update:model-value="updateValue"
)
  .w-flex.column.pa2
    .title4.text-center {{ characterModel.store.active?.name || '' }} будет удален безвозвратно
    .w-flex.pa2
      .spacer
      w-button.mr2(bg-color="error" @click="updateValue(false)") Отмена
      w-button(bg-color="success" @click="removeCharacter") Удалить
</template>

<script setup lang="ts">
import { characterModel } from '@/entities/character';
import * as deleteCharacterModel from '../model';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const updateValue = (value: boolean) => emit('update:modelValue', value);

const removeCharacter = () => {
  deleteCharacterModel.remove();
  updateValue(false)
};
</script>