<template>
  <w-app>
    <header>
      <w-toolbar shadow>
        <div class="title2">RP App</div>
        <div class="spacer" />
      </w-toolbar>
    </header>
    <main class="grow ma2">
      <router-view />
    </main>

    <div class="modals pa2">
      <character-delete-modal />
    </div>
  </w-app>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { initCharacters } from '@/core/characters';
import CharacterDeleteModal from "@/components/character/CharacterDeleteModal.vue";

export default defineComponent({
  components: {
    CharacterDeleteModal,
  },

  setup() {
    onMounted(() => {
      initCharacters();
    });
  },
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
