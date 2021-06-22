import { findOneByProp } from '../core/array';
import list from '../content/races';

export const findClass = (prop, value) => findOneByProp(prop, value, list);

export const getAllClasses = () => list;