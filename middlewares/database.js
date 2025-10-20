import fs from 'node:fs/promises';
export class Database {
  #database = {};

  #persist() {
    fs.writeFile('db.json');
  }

  select(table) {
    const data = this.#database[table] ?? [];

    return data;
  }

  insert(table, data) {
    if (Array.isArray(this.#database[table])) {
      this.#database[table].push(table);
    } else {
      this.#database[table] = [data];
    }

    this.#persist();

    return data;
  }
}
