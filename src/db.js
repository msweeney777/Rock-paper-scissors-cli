const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

//Set defaults for an empty JSON file
db.defaults({statistics: [{'id': 'win', "total": 0}, {'id': 'lose', "total": 0}, {'id': 'tie', "total": 0}]})
  .write();
const Stats = db.get('statistics')
module.exports = {
  db,
  Stats,
}
