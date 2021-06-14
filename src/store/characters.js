import characters from '../api/characters.js';

export default {
  namespaced: true,

  state: () => ({
    list: new Map(),
    active: null,
  }),

  mutations: {
    setList(state, list) {
      state.list = new Map(list.map(item => [item.id, item]));
    },

    setItem(state, character) {
      state.list.set(character.id, character);
    },

    delete(state, id) {
      state.list.delete(id);
    },

    setActive(state, character) {
      state.active = character;
    }
  },

  actions: {
    async init({ commit }) {
      const list = await characters.getAll();
      commit('setList', list);
    },

    async create({ commit }, character) {
      const item = await characters.create(character);
      commit('setItem', item);
    },

    async update({ commit }, character) {
      const item = await characters.update(character);
      commit('setItem', item);
    },

    async delete({ commit }, id) {
      await characters.delete(id);
      commit('delete', id);
    },

    async loadOne({ commit }, id) {
      const item = await characters.getOne(id);
      commit('setActive', item);
    }
  },

  getters: {
    getList(state) {
      return Array.from(state.list).map(([id, item]) => item);
    }
  }
}