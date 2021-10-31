<template lang="pug">
.characters-list-page
  w-button.ma1(
    bg-color="primary" 
    color="white" 
    md 
    route="/create-character"
  ) Создать

  w-list(:items="list" color="primary" hover)
    template(#item="{ item }")
      w-flex(align-center justify-space-between)
        w-button(color="primary" text md) {{ item.name }}
        w-button(text lg icon="mdi mdi-close" @click="openRemoveModal(item)")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModal, EModal } from '@/shared/hooks/modal';
import { Character, useCharacterStore } from "@/entities/character";


const { switchModal } = useModal(EModal.CharacterDelete);
const characterStore = useCharacterStore();

const openRemoveModal = (item: Character) => {
  characterStore.active = item;
  switchModal(true);
};

export default defineComponent(() => ({ list: characterStore.list, openRemoveModal }));
</script>