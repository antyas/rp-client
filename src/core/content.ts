import { computed, ref } from 'vue';
import { pandora } from '../content/pandora';
import { useLogger } from './logger';
import { useLocalStorage } from './ls';
import { findOneByProp, unshift } from './utils/array';

const logger = useLogger('content');
const ls = useLocalStorage();

const games = ref([pandora]);

const gameCode = ref(ls.get('game-code'));
const game = computed(() => findOneByProp('code', gameCode.value, games.value) || null);

const setGame = (code: string) => {
  logger.print('setGame', code);
  gameCode.value = code;
  ls.set('game-code', code);
};

const defaultOption: ContentSelectOption = { name: 'Случайно', id: -1 };
const makeOptions = (list: ContentSelectOption[]) => unshift(defaultOption, list);

const gameListsOptions = computed(() => ({
  classes: makeOptions(game.value?.classes || []),
  races: makeOptions(game.value?.races || []),
  ages: makeOptions(game.value?.ages || []),
  statuses: makeOptions(game.value?.socialStatuses || []),
}));

export const useContent = () => ({ games, game, setGame, gameCode });
export const useGameListsSelectOptions = () => ({ gameListsOptions, defaultOption });