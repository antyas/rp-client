export default [
  {
    id: 0,
    name: 'Земноморец',
    attributes: { s: 1, p: -1, e: 0, c: 1, i: 1, a: 1, l: 0 },
    condition: { h: 8, m: 5, f: 5 },
    feature: '+1 защита от любого параметра брони. +2 красоты.'
  },
  {
    id: 1,
    name: 'Норд',
    attributes: { s: 1, p: -1, e: 1, c: 1, i: 0, a: 1, l: 0 },
    condition: { h: 8, m: 4, f: 6 },
    feature: '50% защита от морозного урона. 2х эффект от хороших условий.',
  },
  {
    id: 2,
    name: 'Орк',
    attributes: { s: 3, p: -1, e: 3, c: -2, i: -1, a: 1, l: 0 },
    condition: { h: 10, m: 2, f: 6 },
    feature: '+1 урон любым оружием.',
  },
  {
    id: 3,
    name: 'Дроу',
    attributes: { s: -1, p: 1, e: 0, c: -1, i: 2, a: 3, l: -1 },
    condition: { h: 5, m: 6, f: 7 },
    feature: '50% защита от электрического урона. +2 к действиям из скрытности',
  },
  {
    id: 4,
    name: 'Эльф',
    attributes: { s: -1, p: 1, e: -2, c: 1, i: 3, a: 2, l: -1 },
    condition: { h: 6, m: 7, f: 5 },
    feature: 'Накапливание попавшей вражеской магии за ход.',
  },
  {
    id: 5,
    name: 'Полурослик',
    attributes: { s: -2, p: -1, e: -1, c: 2, i: 1, a: 2, l: 2 },
    condition: { h: 6, m: 5, f: 7 },
    feature: '+4 сложность при попадании по полурослику.',
  },
  {
    id: 6,
    name: 'Дварф',
    attributes: { s: 2, p: -1, e: 2, c: 0, i: 1, a: -2, l: 1 },
    condition: { h: 9, m: 4, f: 5 },
    feature: '+1 урон за каждые -3 здоровья.',
  },
  {
    id: 7,
    name: 'Табакси',
    attributes: { s: 1, p: 2, e: 1, c: -2, i: -1, a: 2, l: 0 },
    condition: { h: 7, m: 3, f: 8 },
    feature: 'Ночное зрение. Урон без оружия +2',
  },
  {
    id: 8,
    name: 'Тифлинги',
    attributes: { s: 1, p: 1, e: 1, c: 1, i: 1, a: 1, l: -3 },
    condition: { h: 6, m: 6, f: 6 },
    feature: '50% защита от огненного урона. 2х эффект от получаемого магического баффа.',
  },
  {
    id: 9,
    name: 'Гнолл',
    attributes: { s: 1, p: 2, e: 3, c: -2, i: -2, a: 1, l: 0 },
    condition: { h: 7, m: 4, f: 7 },
    feature: '+1 к атрибутам за каждые - 2 здоровья. Восстановление 1 здоровье за прием пищи.',
  },
  {
    id: 10,
    name: 'Кобольд',
    attributes: { s: 2, p: 0, e: 2, c: -2, i: -1, a: 1, l: 1 },
    condition: { h: 7, m: 4, f: 7 },
    feature: 'Водное дыхание. В два раза меньше эффект от ядов против кобольда.',
  },
];