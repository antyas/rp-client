import type { CharacterAge, SocialStatus } from './types';
import ages from '@/content/ages';
import socialStatuses from '@/content/social-statuses';

export const loadAges = async (): Promise<CharacterAge[]> => ages;
export const loadSocialStatuses = async (): Promise<SocialStatus[]> => socialStatuses;