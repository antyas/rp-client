<template>
  <div class="create-characters-page">
    <w-input
      v-model="hero.name"
      class="mb2"
      outline
    >
      Имя
    </w-input>

    <w-select
      v-model="hero.race"
      :items="races"
      item-label-key="name"
      item-value-key="id"
      class="mb2"
      outline
    >
      Раса
    </w-select>

    <w-select
      v-model="hero.class"
      :items="classes"
      item-label-key="name"
      item-value-key="id"
      class="mb2"
      outline
    >
      Класс
    </w-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCharacters } from '@/core/characters';
import { useContent, EContent } from '@/core/content';

const { create } = useCharacters();
const { list: classes } = useContent<CharacterClass>(EContent.Classes);
const { list: races } = useContent<CharacterRace>(EContent.Races);

export default defineComponent(() => ({
  create,
  classes,
  races,
  hero: reactive({
    name: '',
    class: null,
    race: null,
  }),
}));
</script>