<template>
  <div class="game-page">
    <w-tabs
      :items="tabs"
    >
</w-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import { useContent } from "@/core/content";

export default defineComponent(() => {
  const router = useRouter();
  const { setGame } = useContent();

  const tabs = [
    { title: 'Персонаж' },
    { title: 'Правила' }
  ]

  const onClickGame = (game: GameContent) => {
    setGame(game.code);
    router.push('/create-character');
  };

  return {
    tabs,
    onClickGame,
    log: console.log,
  };
});
</script>