import { SocialStatus } from "../../types";

const list: SocialStatus[] = [
  {
    id: 0,
    name: 'Раб',
    initialCapital: { base: -30, dice: 20, sign: 'both' },
  },
  {
    id: 1,
    name: 'Нищий',
    initialCapital: { base: 0, dice: 4, sign: 'plus' },
  },
  {
    id: 2,
    name: 'Бедный',
    initialCapital: { base: 4, dice: 6, sign: 'plus' },
  },
  {
    id: 3,
    name: 'Средний',
    initialCapital: { base: 8, dice: 12, sign: 'plus' },
  },
  {
    id: 4,
    name: 'Успешный',
    initialCapital: { base: 16, dice: 20, sign: 'plus' },
  },
  {
    id: 5,
    name: 'Богатый',
    initialCapital: { base: 32, count: 2, dice: 12, sign: 'plus' },
  },
];

export default list;