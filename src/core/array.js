export const findOneByProp = (prop, value, array) => 
  array.find(item => item[prop] === value);