import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

console.log()

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src') },
    ],
  },

  plugins: [vue()]
})
