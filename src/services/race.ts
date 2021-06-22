import { findOneByProp } from '../core/array';
import list from '../content/races';

export const findRaceById = (id: number) => findOneByProp('id', id, list);

export const getAllRaces = () => list;