const mysql = require("mysql2");
const databaseConfig = require("./databaseConfig");

const db = mysql.createConnection(databaseConfig);
db.connect((err) => {
  if (!err) console.log("Database is connected!");
  else
    console.log(
      "Database not connected! : " + JSON.stringify(err, undefined, 2)
    );
});

module.exports = db;
