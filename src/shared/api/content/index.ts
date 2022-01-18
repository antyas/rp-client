export * from './types';

import type { GameContent } from './types';
import data from './data';

export const contentService = {
  fetchOne: async (code: string): Promise<GameContent | null> => data[code] || null,
}