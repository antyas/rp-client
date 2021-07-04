<template>
  <div class="characters-list-page">
    <w-button 
      class="ma1" 
      bg-color="primary" 
      color="white" 
      md 
      route="/create-character"
    >
      Создать
    </w-button>

    <w-list :items="list" color="primary" hover>
      <template #item="{ item }">
        <w-flex align-center justify-space-between>
          <w-button color="primary" text md>{{ item.name }}</w-button>

          <w-button text lg icon="mdi mdi-close" @click="openRemoveModal(item)" />
        </w-flex>
      </template>
    </w-list>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useModal, EModal } from '@/core/modal';
import { useCharacters } from '@/core/characters';


const { switchModal } = useModal(EModal.CharacterDelete);
const { list, setActive} = useCharacters();

const openRemoveModal = (item: Character) => {
  setActive(item);
  switchModal(true);
};

export default defineComponent(() => ({ list, openRemoveModal }));
</script>