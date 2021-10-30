<template lang="pug">
.game-page
  w-tabs(:items="tabs")
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from 'vue-router';
import { useContent } from "@/shared/hooks/content";

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