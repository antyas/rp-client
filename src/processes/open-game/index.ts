import router from "@/app/router";
import { useCharacterStore } from "@/entities/character";
import { useContentStore } from "@/entities/content";
import { useGameStore } from "@/entities/game";
import { getAll } from "@/shared/api/character";
import { loadContent } from "@/shared/api/content";
import { Game } from "@/shared/api/game";

export const openGame = async (game: Game) => {
  const gameStore = useGameStore();
  gameStore.active = game;

  const characterStore = useCharacterStore();
  const contentStore = useContentStore();

  const charactersPromise = getAll();
  const contentPromise = loadContent(game.code);

  characterStore.list = await charactersPromise;

  const content = await contentPromise;
  if (content) {
    contentStore.$patch(content);
  }

  router.push('/characters-list');
}