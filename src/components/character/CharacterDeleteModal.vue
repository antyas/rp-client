<template>
  <w-dialog
    :model-value="modal.isActive"
    title="Точно хочешь удалить персонажа?"
    persistent
    :width="550"
    @input="modal.switch"
  >
    {{ character?.name }} будет удален безвозвратно
    <template #actions>
      <div class="spacer" />
      <w-button class="mr2" bg-color="error" @click="close">Нет</w-button>
      <w-button bg-color="success" @click="remove">Да</w-button>
    </template>
  </w-dialog>
</template>

<script lang="ts">
/* eslint-disable vue/require-explicit-emits */
import { useStore } from "vuex";
import { useModal, EModal } from '@/core/modal';
import { computed, defineComponent } from "vue";

export default defineComponent({
  setup() {
    const store = useStore();
    const modal = useModal(EModal.CharacterDelete);

    const character = computed(() => store.state.characters.active);

    const remove = () => {
      store.dispatch("characters/delete", character.value.id);
      modal.switch(false);
    };

    return {
      character,
      modal,
      remove,
      close,
    };
  },
});
</script>