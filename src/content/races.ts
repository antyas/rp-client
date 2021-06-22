const list: CharacterRace[] = [
  {
    id: 0,
    name: 'Земноморец',
    attributes: { strength: 1, perception: -1, endurance: 0, charisma: 1, intelligence: 1, agility: 1, luck: 0 },
    condition: { health: 8, magicka: 5, fatigue: 5 },
    feature: '+1 защита от любого параметра брони. +2 красоты.'
  },
  {
    id: 1,
    name: 'Норд',
    attributes: { strength: 1, perception: -1, endurance: 1, charisma: 1, intelligence: 0, agility: 1, luck: 0 },
    condition: { health: 8, magicka: 4, fatigue: 6 },
    feature: '50% защита от морозного урона. 2х эффект от хороших условий.',
  },
  {
    id: 2,
    name: 'Орк',
    attributes: { strength: 3, perception: -1, endurance: 3, charisma: -2, intelligence: -1, agility: 1, luck: 0 },
    condition: { health: 10, magicka: 2, fatigue: 6 },
    feature: '+1 урон любым оружием.',
  },
  {
    id: 3,
    name: 'Дроу',
    attributes: { strength: -1, perception: 1, endurance: 0, charisma: -1, intelligence: 2, agility: 3, luck: -1 },
    condition: { health: 5, magicka: 6, fatigue: 7 },
    feature: '50% защита от электрического урона. +2 к действиям из скрытности',
  },
  {
    id: 4,
    name: 'Эльф',
    attributes: { strength: -1, perception: 1, endurance: -2, charisma: 1, intelligence: 3, agility: 2, luck: -1 },
    condition: { health: 6, magicka: 7, fatigue: 5 },
    feature: 'Накапливание попавшей вражеской магии за ход.',
  },
  {
    id: 5,
    name: 'Полурослик',
    attributes: { strength: -2, perception: -1, endurance: -1, charisma: 2, intelligence: 1, agility: 2, luck: 2 },
    condition: { health: 6, magicka: 5, fatigue: 7 },
    feature: '+4 сложность при попадании по полурослику.',
  },
  {
    id: 6,
    name: 'Дварф',
    attributes: { strength: 2, perception: -1, endurance: 2, charisma: 0, intelligence: 1, agility: -2, luck: 1 },
    condition: { health: 9, magicka: 4, fatigue: 5 },
    feature: '+1 урон за каждые -3 здоровья.',
  },
  {
    id: 7,
    name: 'Табакси',
    attributes: { strength: 1, perception: 2, endurance: 1, charisma: -2, intelligence: -1, agility: 2, luck: 0 },
    condition: { health: 7, magicka: 3, fatigue: 8 },
    feature: 'Ночное зрение. Урон без оружия +2',
  },
  {
    id: 8,
    name: 'Тифлинг',
    attributes: { strength: 1, perception: 1, endurance: 1, charisma: 1, intelligence: 1, agility: 1, luck: -3 },
    condition: { health: 6, magicka: 6, fatigue: 6 },
    feature: '50% защита от огненного урона. 2х эффект от получаемого магического баффа.',
  },
  {
    id: 9,
    name: 'Гнолл',
    attributes: { strength: 1, perception: 2, endurance: 3, charisma: -2, intelligence: -2, agility: 1, luck: 0 },
    condition: { health: 7, magicka: 4, fatigue: 7 },
    feature: '+1 к атрибутам за каждые - 2 здоровья. Восстановление 1 здоровье за прием пищи.',
  },
  {
    id: 10,
    name: 'Кобольд',
    attributes: { strength: 2, perception: 0, endurance: 2, charisma: -2, intelligence: -1, agility: 1, luck: 1 },
    condition: { health: 7, magicka: 4, fatigue: 7 },
    feature: 'Водное дыхание. В два раза меньше эффект от ядов против кобольда.',
  },
];

export default list;