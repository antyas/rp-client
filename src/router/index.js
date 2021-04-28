import { createWebHistory, createRouter } from "vue-router";
import Main from '@/pages/Main.vue';
import CharactersList from '@/pages/CharactersList.vue';

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/characters-list',
    name: 'characters-list',
    component: CharactersList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;