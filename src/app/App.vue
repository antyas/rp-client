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
import { defineComponent } from "vue";
import CharacterDeleteModal from "@/features/delete-character/ui/CharacterDeleteModal.vue";
import { useCharacterStore } from "../entities/character";

export default defineComponent({
  components: {
    CharacterDeleteModal,
  },

  setup() {
    useCharacterStore().init();
  },
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
