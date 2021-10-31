import type { CharacterAge, SocialStatus } from './types';
import ages from './data/ages';
import socialStatuses from './data/social-statuses';

export const loadAges = async (): Promise<CharacterAge[]> => ages;
export const loadSocialStatuses = async (): Promise<SocialStatus[]> => socialStatuses;