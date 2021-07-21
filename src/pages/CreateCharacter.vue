<template>
  <div class="create-characters-page">
    <w-input
      v-model="hero.name"
      class="mb2"
    >
      Имя
    </w-input>

    <w-select
      v-model="hero.race"
      :items="gameListsOptions.races"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Раса
    </w-select>

    <w-select
      v-model="hero.class"
      :items="gameListsOptions.classes"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Класс
    </w-select>

    <w-select
      v-model="hero.age"
      :items="gameListsOptions.ages"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Возраст
    </w-select>

    <w-select
      v-model="hero.socialStatus"
      :items="gameListsOptions.statuses"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Статус
    </w-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCharacters } from '@/core/characters';
import { useGameListsSelectOptions } from '@/core/content';

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