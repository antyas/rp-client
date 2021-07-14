const list: CharacterSocialStatus[] = [
  {
    id: 0,
    name: 'Раб',
    glory: { base: 0, dice: 20, sign: 'both' },
    initialCapital: { base: -30, dice: 20, sign: 'both' },
  },
  {
    id: 1,
    name: 'Нищий',
    glory: { base: 0, dice: 4, sign: 'both' },
    initialCapital: { base: 0, dice: 4, sign: 'plus' },
  },
  {
    id: 2,
    name: 'Бедный',
    glory: { base: 0, dice: 6, sign: 'plus' },
    initialCapital: { base: 4, dice: 6, sign: 'plus' },
  },
  {
    id: 3,
    name: 'Средний',
    glory: { base: 0, dice: 12, sign: 'plus' },
    initialCapital: { base: 8, dice: 12, sign: 'plus' },
  },
  {
    id: 4,
    name: 'Успешный',
    glory: { base: 0, dice: 20, sign: 'plus' },
    initialCapital: { base: 16, dice: 20, sign: 'plus' },
  },
  {
    id: 5,
    name: 'Богатый',
    glory: { base: 10, count: 2, dice: 12, sign: 'plus' },
    initialCapital: { base: 32, count: 2, dice: 12, sign: 'plus' },
  },
];

export default list;