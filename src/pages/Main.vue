<template lang="pug">
.main-page
  w-button.ma1(
    v-for="game in games"
    :key="game.code"
    color="primary"
    outline
    md
    @click="openGame(game)"
  ) {{ game.name }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useGameStore } from "@/entities/game";
import { openGame } from "@/processes/open-game";

export default defineComponent(() => {
  const gameStore = useGameStore();

  return {
    games: gameStore.list,
    openGame,
  };
});
</script>