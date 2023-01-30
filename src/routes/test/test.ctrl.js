/* Test API file */

const db = require("../db");

exports.get_root = (req,res) => {
    db.query('SELECT * from test', (error, rows) => {
        if (error) {
            throw error;
        }
        console.log(rows);
        res.send(rows);
    });
};
