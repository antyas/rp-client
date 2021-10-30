<template lang="pug">
.main-page
  w-button.ma1(
    v-for="game in games"
    :key="game.code"
    color="primary"
    outline
    md
    @click="onClickGame(game)"
  ) {{ game.name }}
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import { useContent } from "@/core/content";

export default defineComponent(() => {
  const router = useRouter();
  const { games, setGame } = useContent();

  const onClickGame = (game: GameContent) => {
    setGame(game.code);
    router.push('/create-character');
  };

  return {
    games,
    onClickGame,
    log: console.log,
  };
});
</script>