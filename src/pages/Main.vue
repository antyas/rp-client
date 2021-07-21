<template>
  <div class="main-page">
    <w-button
      v-for="game in games"
      :key="game.code"
      class="ma1"
      color="primary"
      outline
      md
      @click="onClickGame(game)"
    >
      {{ game.name }}
    </w-button>
    
  </div>
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