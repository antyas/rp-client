<template lang="pug">
.main-page
  w-button.ma1(
    v-for="game in gameModel.store.list"
    :key="game.code"
    color="primary"
    outline
    md
    @click="router.push('/game/' + game.code)"
  ) {{ game.name }}
</template>

<script setup lang="ts">
import { gameModel } from "@/entities/game";
import { useRouter } from "vue-router";

const router = useRouter();
</script>