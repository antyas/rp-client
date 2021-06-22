import { findOneByProp } from '../core/array';
import list from '../content/classes';

export const findClass = (prop, value) => findOneByProp(prop, value, list);

export const getAllClasses = () => list;
