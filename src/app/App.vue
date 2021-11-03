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
import { initApp } from "@/processes/init-app";

export default defineComponent({
  setup() {
    initApp();
  },
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
