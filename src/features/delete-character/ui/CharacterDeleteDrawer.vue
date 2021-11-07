<template lang="pug">
w-drawer(
  :model-value="props.modelValue"
  bottom
  height="100px"
  @update:model-value="updateValue"
)
  .title4.text-center {{ characterStore.active?.name || '' }} будет удален безвозвратно
  .w-flex.pa2
    .spacer
    w-button.mr2(bg-color="error" @click="updateValue(false)") Отмена
    w-button(bg-color="success" @click="removeCharacter") Удалить
</template>

<script setup lang="ts">
import { useCharacterStore } from '@/entities/character';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const characterStore = useCharacterStore();
const updateValue = (value: boolean) => emit('update:modelValue', value);

const removeCharacter = () => {
  characterStore.deleteActive();
  updateValue(false)
};
</script>