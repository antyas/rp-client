import { findOneByProp } from '../core/array';
import list from '../content/classes';

export const findClassById = (id: number) => findOneByProp('id', id, list);

export const getAllClasses = () => list;
