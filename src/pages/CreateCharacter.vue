<template lang="pug">
.create-characters-page
  w-input.mb2(v-model="hero.name") Имя

  w-select.mb2(
    v-model="hero.age"
    :items="options.ages"
    item-label-key="name"
    return-object
  ) Возраст

  w-select.mb2(
    v-model="hero.socialStatus"
    :items="options.statuses"
    item-label-key="name"
    return-object
  ) Статус
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCharacterStore } from "@/entities/character";
import { useContentStore, defaultOption } from "@/entities/content";

export default defineComponent(() => {
  const characterStore = useCharacterStore();
  const contentStore = useContentStore();

  return {
    create: characterStore.create,
    options: {
      ages: contentStore.ageOptions,
      statuses: contentStore.statusOptions,
    },
    hero: reactive({
      name: '',
      age: defaultOption,
      socialStatus: defaultOption,
    }),
  };
});
</script>