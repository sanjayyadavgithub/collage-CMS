const sqlite3 = require('sqlite3');
let db;
module.exports.createDatabase = () => {
    db = new sqlite3.Database('./cms.db', (err) => {
        if (err) { return console.log("Error Coming When Connecting on SQLite Server") };
        console.log("Connected Successfully With SQLite Server");
    });
    return db;
}
module.exports.getDatabase = () => db;