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

    <w-list
      :items="list"
      color="primary"
      hover
    >
      <template #item="{ item }">
        <w-flex
          align-center
          justify-space-between
        >
          <w-button
            color="primary"
            text
            md
          >
            {{ item.name }}
          </w-button>

          <w-button
            text
            lg
            icon="mdi mdi-close"
            @click="remove(item)"
          />
        </w-flex>
      </template>
    </w-list>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {

  setup() {
    const store = useStore();

    const list = computed(() => store.getters['characters/getList']);
    const create = character => store.dispatch('characters/create', character);
    const setVisibleDelete = value => store.commit('modal/setCharacterDelete', value);
    const setActive = character => store.commit('characters/setActive', character);

    const remove = (item) => {
      setActive(item);
      setVisibleDelete(true);
    };

    return {
      list,
      create,
      remove,
      setActive,
      setVisibleDelete
    }
  }
}


</script>