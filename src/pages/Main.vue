<template lang="pug">
.main-page
  w-button.ma1(
    v-for="game in gameStore.list"
    :key="game.code"
    color="primary"
    outline
    md
    @click="openGame(game)"
  ) {{ game.name }}
</template>

<script setup lang="ts">
import { useGameStore } from "@/entities/game";
import { openGame } from "@/processes/open-game";

const gameStore = useGameStore();
</script>