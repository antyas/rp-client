<template lang="pug">
.create-characters-page
  w-input.mb2(v-model="hero.name") Имя

  w-select.mb2(
    v-model="hero.age"
    :items="contentStore.ageOptions"
    item-label-key="name"
    return-object
  ) Возраст

  w-select.mb2(
    v-model="hero.socialStatus"
    :items="contentStore.statusOptions"
    item-label-key="name"
    return-object
  ) Статус
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { useCharacterStore } from "@/entities/character";
import { useContentStore, defaultOption } from "@/entities/content";

const characterStore = useCharacterStore();
const contentStore = useContentStore();

const hero = reactive({
  name: '',
  age: defaultOption,
  socialStatus: defaultOption,
});
</script>