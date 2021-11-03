import type { Game } from "./types";

const games: Game[] = [
  {
    name: 'Гримдарк',
    code: 'grimdark',
  }
];

export const loadGames = async (): Promise<Game[]> => games;