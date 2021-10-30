<template lang="pug">
.create-characters-page
  w-input.mb2(v-model="hero.name") Имя

  w-select.mb2(
    v-model="hero.race"
    :items="gameListsOptions.races"
    item-label-key="name"
    return-object
  ) Раса

  w-select.mb2(
    v-model="hero.class"
    :items="gameListsOptions.classes"
    item-label-key="name"
    return-object
  ) Класс

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
import { useCharacters } from '@/entities/character/model';
import { useGameListsSelectOptions } from '@/shared/hooks/content';

const { create } = useCharacters();
const { gameListsOptions, defaultOption } = useGameListsSelectOptions();

export default defineComponent(() => ({
  create,
  gameListsOptions,
  hero: reactive({
    name: '',
    class: defaultOption,
    race: defaultOption,
    age: defaultOption,
    socialStatus: defaultOption,
  }),
}));
</script>