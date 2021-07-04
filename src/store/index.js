import { createStore, createLogger } from 'vuex';
import characters from './characters.js';

const store = createStore({
  plugins: [createLogger()],
  
  state: () => ({}),

  mutations: {

  },

  actions: {

  },

  modules: {
    characters,
  }
})

export default store;