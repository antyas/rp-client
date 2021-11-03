import { CharacterAge } from "../../types";

const list: CharacterAge[] = [
  {
    id: 0,
    name: 'Молодой',
    pointsPerLevel: 2,
    startPoints: {
      base: 0,
      dice: 4,
      sign: 'plus',
    },
    condition: {
      health: 2,
      cuteness: 2,
    },
  },
  {
    id: 1,
    name: 'Средний',
    pointsPerLevel: 1,
    startPoints: {
      base: 2,
      dice: 6,
      sign: 'plus',
    },
  },
  {
    id: 2,
    name: 'Старый',
    pointsPerLevel: 1,
    startPoints: {
      base: 4,
      dice: 8,
      sign: 'plus',
    },
    condition: {
      health: -2,
      cuteness: -2,
    },
  }
];

export default list;