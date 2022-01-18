<template lang="pug">
.characters-list-page
  w-button.ma1(
    bg-color="primary" 
    color="white" 
    md 
    route="/create-character"
  ) Создать

  w-list(:items="characterModel.store.list" color="primary" hover)
    template(#item="{ item }")
      w-flex(align-center justify-space-between)
        w-button(color="primary" text md) {{ item.name }}
        w-button(text lg icon="mdi mdi-close" @click="openRemoveModal(item)")
  
  character-delete-drawer(v-model="isDeleteDrawerOpen")
</template>

<script setup lang="ts">
import { ref } from '@vue/reactivity';
import type { Character } from "@/shared/api/character";
import { CharacterDeleteDrawer } from '@/features/delete-character';
import { characterModel } from '@/entities/character';

const openRemoveModal = (item: Character) => {
  characterModel.store.active = item;
  isDeleteDrawerOpen.value = true;
};

const isDeleteDrawerOpen = ref(false);
</script>