<template>
  <div class="characters-list-page">
    <w-button
      class="ma1"
      bg-color="primary"
      color="white"
      md
      @click="create({ name: 'Hero' })"
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
            @click="openDeleteModal(item)"
          />
        </w-flex>
      </template>
    </w-list>
    <character-delete-modal
      v-if="showDeleteModal"
      @delete="deleteCharacter"
      @close="closeDeleteModal"
    />
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';
import CharacterDeleteModal from '@/components/character/CharacterDeleteModal.vue';

export default {
  components: {
    CharacterDeleteModal
  },

  setup() {
    const showDeleteModal = ref(false);

    const openDeleteModal = (item) => {
      setActive(item);
      showDeleteModal.value = true;
    };

    const closeDeleteModal = () => {
      showDeleteModal.value = false;
      setActive({});
    }

    const deleteCharacter = () => {
      remove();
      closeDeleteModal();
    }

    const store = useStore();
    const active = computed(() => store.state.characters.active);
    const list = computed(() => store.getters['characters/getList']);
    const create = character => store.dispatch('characters/create', character);
    const remove = () => store.dispatch('characters/delete', active.value.id);
    const setActive = character => store.commit('characters/setActive', character);

    return {
      showDeleteModal,
      openDeleteModal,
      deleteCharacter,
      closeDeleteModal,
      list,
      create,
      remove,
      setActive,
      active,
    }
  }
}


</script>