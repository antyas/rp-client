export type Game = {
  name: string,
  code: string,
}

const games: Game[] = [
  {
    name: 'Гримдарк',
    code: 'grimdark',
  }
];

export const gameService = {
  fetch: async (): Promise<Game[]> => games,
}