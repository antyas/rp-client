export default {
  namespaced: true,

  state: () => ({
    characterDelete: false,
  }),

  mutations: {
    setCharacterDelete(state, value) {
      state.characterDelete = value;
    }
  },
}