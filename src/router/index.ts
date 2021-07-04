import { createWebHistory, createRouter } from "vue-router";
import Main from '../pages/Main.vue';
import CharactersList from '@/pages/CharactersList.vue';
import CreateCharacter from '@/pages/CreateCharacter.vue';

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
  },
  {
    path: '/create-character',
    name: 'create-character',
    component: CreateCharacter
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;