<template lang="pug">
.create-characters-page
  w-input.mb2(v-model="hero.name") Имя

  w-select.mb2(
    v-model="hero.age"
    :items="gameListsOptions.ages"
    item-label-key="name"
    return-object
  ) Возраст

  w-select.mb2(
    v-model="hero.socialStatus"
    :items="gameListsOptions.statuses"
    item-label-key="name"
    return-object
  ) Статус
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useGameListsSelectOptions } from '@/shared/hooks/content';
import { useCharacterStore } from "@/entities/character";

const characterStore = useCharacterStore();
const { gameListsOptions, defaultOption } = useGameListsSelectOptions();

export default defineComponent(() => ({
  create: characterStore.create,
  gameListsOptions,
  hero: reactive({
    name: '',
    age: defaultOption,
    socialStatus: defaultOption,
  }),
}));
</script>