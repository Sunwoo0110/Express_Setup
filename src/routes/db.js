const dotenv = require("dotenv");
const config = require('../config/config');
const mysql = require('mysql2');

dotenv.config(); //LOAD CONFIG

const connection = mysql.createConnection(config);

try {
    connection.connect();
    console.log("[server] DB connection is sucessfull")
} catch (e) {
    console.error(e);
}

module.exports = connection