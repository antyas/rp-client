import { createWebHistory, createRouter } from "vue-router";
import Main from '@/pages/Main.vue';
import Game from '@/pages/Game.vue';
import CreateCharacter from '@/pages/CreateCharacter.vue';

export const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/game/:gameCode',
    name: 'characters-list',
    component: Game
  },
  // {
  //   path: '/game/:gameCode/create-character',
  //   name: 'create-character',
  //   component: CreateCharacter
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;