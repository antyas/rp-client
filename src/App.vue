<template lang="pug">
w-app
  header
    w-toolbar(shadow)
      .title2 RP App
      .spacer
      
  main.grow.ma2
    router-view

  .modals.pa2
    character-delete-modal
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { initCharacters } from '@/core/characters';
import CharacterDeleteModal from "@/components/character/CharacterDeleteModal.vue";
import { useContent } from "./core/content";

export default defineComponent({
  components: {
    CharacterDeleteModal,
  },

  setup() {
    onMounted(() => {
      initCharacters();
    });

    return {
      content: useContent(),
    }
  },
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
