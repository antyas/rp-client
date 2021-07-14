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
      return-object
      class="mb2"
    >
      Раса
    </w-select>

    <w-select
      v-model="hero.class"
      :items="classes"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Класс
    </w-select>

    <w-select
      v-model="hero.age"
      :items="ages"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Возраст
    </w-select>

    <w-select
      v-model="hero.socialStatus"
      :items="statuses"
      item-label-key="name"
      return-object
      class="mb2"
    >
      Возраст
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
const { list: ages } = useContent<CharacterAge>(EContent.Ages);
const { list: statuses } = useContent<CharacterSocialStatus>(EContent.SocialStatuses);
const defaultOption: ContentSelectOption = { name: 'Случайно', id: -1 };
const makeOptions = (list: ContentSelectOption[]) => unshift(defaultOption, list);

export default defineComponent(() => ({
  create,
  classes: makeOptions(classes),
  races: makeOptions(races),
  ages: makeOptions(ages),
  statuses: makeOptions(statuses),
  hero: reactive({
    name: '',
    class: defaultOption,
    race: defaultOption,
    age: defaultOption,
    socialStatus: defaultOption,
  }),
}));
</script>