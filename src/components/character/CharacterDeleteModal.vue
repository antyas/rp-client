<template>
  <w-dialog
    title="Точно хочешь удалить персонажа?"
    persistent
    :width="550"
  >
    {{ character.name }} будет удален безвозвратно
    <template #actions>
      <div class="spacer" />
      <w-button
        class="mr2"
        bg-color="error"
        @click="close"
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

export default {
  setup(props, ctx) {
    const store = useStore();
    const character = store.state.characters.active;
    const remove = () => ctx.emit('delete');
    const close = () => ctx.emit('close');

    return {
      character,
      remove,
      close
    }
  }
}
</script>