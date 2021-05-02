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

          <w-icon 
            md
            @click="remove(item.id)"
          >
            mdi mdi-close
          </w-icon>
        </w-flex>
      </template>
    </w-list>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { useStore } from 'vuex';

const deleteModal = reactive({
  show: false,
  title: '',
  id: 0,
});

const openDeleteModal = (item) => {
  this.deleteModal.title = id
};

const store = useStore();

const list = computed(() => store.getters['characters/getList']);
const create = (character) => store.dispatch('characters/create', character);
const remove = (id) => store.dispatch('characters/delete', id);
</script>