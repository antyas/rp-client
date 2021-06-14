import { createStore, createLogger } from 'vuex';
import characters from './characters.js';
import modal from './modal.js';

const store = createStore({
  plugins: [createLogger()],
  
  state: () => ({}),

  mutations: {

  },

  actions: {

  },

  modules: {
    characters,
    modal
  }
})

export default store;