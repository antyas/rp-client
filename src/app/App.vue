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
import { gameModel } from '@/entities/game';
import { gameService } from '@/shared/api/game';

const init = async () => {
  gameModel.store.list = await gameService.fetch();
};

init();
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
}
</style>
