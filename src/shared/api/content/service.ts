import type { GameContent } from './types';
import data from './data';

export const loadContent = async (code: string): Promise<GameContent | null> => data[code] || null;