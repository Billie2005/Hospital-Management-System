const db = require("../config/db");

const findUserByUsername = (user_name,callback) => {
    db.query(
        'SELECT * from user where user_name = ?',[user_name],(err,result) => callback(err,result)
    );
}

module.exports = { findUserByUsername }