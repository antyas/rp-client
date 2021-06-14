<template>
  <w-dialog
    :model-value="visible"
    title="Точно хочешь удалить персонажа?"
    persistent
    :width="550"
    @input="setVisible"
  >
    {{ character?.name }} будет удален безвозвратно
    <template #actions>
      <div class="spacer" />
      <w-button
        class="mr2"
        bg-color="error"
        @click="setVisible(false)"
      >
        Нет
      </w-button>
      <w-button
        bg-color="success"
        @click="remove"
      >
        Да
      </w-button>
    </template>
  </w-dialog>
</template>

<script>
/* eslint-disable vue/require-explicit-emits */
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
  setup() {
    const store = useStore();

    const character = computed(() => store.state.characters.active);
    const visible = computed(() => store.state.modal.characterDelete);
    const setVisible = value => store.commit('modal/setCharacterDelete', value);

    const remove = () => {
      store.dispatch('characters/delete', character.value.id);
      setVisible(false);
    };

    return {
      character,
      remove,
      visible,
      setVisible
    }
  }
}
</script>