import { useGameStore } from "@/entities/game";
import { loadGames } from "@/shared/api/game";

export const initApp = async () => {
  const gameStore = useGameStore();
  gameStore.list = await loadGames();
}