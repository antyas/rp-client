function set(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function get(key) {
  JSON.parse(localStorage.getItem(key));
}

function load(collection) {
  return new Map(get(collection) || []);
}

function save(collection, data) {
  set(collection, Array.from(data));
}

function increment(collection) {
  const lastId = +localStorage.getItem(`${collection}-last-id`);
  const id = lastId ? lastId + 1 : 0;
  localStorage.setItem(`${collection}-last-id`, id);
  return id;
}

function add(collection, item) {
  const list = load(collection);
  const id = increment(collection);

  item.id = id;
  list.set(id, item);
  save(collection, list);

  return item;
}

function update(collection, item) {
  const list = load(collection);
  list.set(item.id, item);
  save(collection, list);
  return item;
}

function remove(collection, id) {
  const list = load(collection);
  list.delete(id);
  save(collection, list);
}

function all(collection) {
  return get(collection).map((key, value) => value);
}

function one(collection, id) {
  return load(collection).get(id);
}

export default {
  set,
  get,
  add,
  update,
  remove,
  all,
  one
}