<template>
  <div class="create-characters-page">
    <w-input>Имя</w-input>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
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