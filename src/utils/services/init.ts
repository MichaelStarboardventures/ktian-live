// @ts-ignore
import Nedb from 'nedb';

class Init {
  db: typeof Nedb;

  constructor() {
    this.db = new Nedb({
      filename: '@/dbs/base.db',
      autoload: true,
      timestampData: true,
    });
  }
}

export default new Init().db;
