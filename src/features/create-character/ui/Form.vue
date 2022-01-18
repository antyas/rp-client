<template lang="pug">
.create-character-form
  w-input.mb2(v-model="hero.name") Имя

  w-select.mb2(
    v-model="hero.age"
    :items="contentModel.store.ageOptions"
    item-label-key="name"
    return-object
  ) Возраст

  w-select.mb2(
    v-model="hero.socialStatus"
    :items="contentModel.store.statusOptions"
    item-label-key="name"
    return-object
  ) Статус

  .w-flex.pa2
    .spacer
    w-button.mr2(bg-color="error" @click="router.push('/game')") Отмена
    w-button(bg-color="success" @click="createCharacterModel.create(hero)") Создать
</template>

<script setup lang="ts">
import { contentModel } from "@/entities/content";
import * as createCharacterModel from '../model';
import { useRouter, useRoute } from "vue-router";
import { reactive } from "vue";

const router = useRouter();
// const route = useRoute();

// const gameCode = route.params.gameCode[0] ?? route.params.gameCode;
const hero = reactive(createCharacterModel.getEmptyFormData());
</script>