<template>
  <div class="create-characters-page">
    <w-input>Имя</w-input>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCharacter } from '@/core/characters';

export default defineComponent(useCharacter);
</script>