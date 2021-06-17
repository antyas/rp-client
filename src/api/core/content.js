export default class {
  constructor(list) {
    this.list = list;
  }

  find(field, value) {
    return this.list.find(item => item[field] === value);
  }

  all() {
    return this.list;
  }
}