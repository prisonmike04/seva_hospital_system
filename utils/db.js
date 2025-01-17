const mysql = require('mysql2');

const db = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: 'Aayu0306',
    database: 'seva_hospital_db'
});

db.connect((err) => {
    if(err) throw err;
    console.log("MySQL connected");
});

module.exports = db;