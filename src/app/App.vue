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

<script setup lang="ts">
import { initApp } from "@/processes/init-app";

initApp();
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
