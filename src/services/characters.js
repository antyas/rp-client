import ls from '../core/ls';

const collection = 'characters';

export default {
  async create(character) {
    return ls.add(collection, character);
  },

  async update(character) {
    return ls.update(collection, character);
  },

  async delete(id) {
    return ls.remove(collection, id);
  },

  async getAll() {
    return ls.all(collection);
  },

  async getOne(id) {
    return ls.one(collection, id);
  },
}