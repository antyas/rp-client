export default {
  namespaced: true,

  state: () => ({
    classes: [],
    races: []
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
};