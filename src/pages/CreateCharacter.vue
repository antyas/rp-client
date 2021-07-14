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
      :items="races"
      item-label-key="name"
      item-value-key="id"
      class="mb2"
    >
      Раса
    </w-select>

    <w-select
      v-model="hero.class"
      :items="classes"
      item-label-key="name"
      item-value-key="id"
      class="mb2"
    >
      Класс
    </w-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useCharacters } from '@/core/characters';
import { useContent, EContent } from '@/core/content';
import { unshift } from "@/core/utils/array";

const { create } = useCharacters();
const { list: classes } = useContent<CharacterClass>(EContent.Classes);
const { list: races } = useContent<CharacterRace>(EContent.Races);
const makeOptions = (list: ContentSelectOption[]) => 
  unshift<ContentSelectOption>({ name: 'Случайно', id: -1 }, list);

export default defineComponent(() => ({
  create,
  classes: makeOptions(classes),
  races: makeOptions(races),
  hero: reactive({
    name: '',
    class: -1,
    race: -1,
  }),
}));
</script>