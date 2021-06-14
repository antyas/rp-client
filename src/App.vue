<template>
  <w-app>
    <header>
      <w-toolbar shadow>
        <div class="title2">
          RP App
        </div>
        <div class="spacer" />
      </w-toolbar>
    </header>
    <main class="grow ma2">
      <router-view />
    </main>

    <character-delete-modal />
  </w-app>
</template>

<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
import CharacterDeleteModal from '@/components/character/CharacterDeleteModal.vue';

export default {
  components: {
    CharacterDeleteModal
  },

  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch('characters/init');
    });
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
