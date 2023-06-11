const mysql = require("mysql2");


function startDB(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
        console.log("Connected to the business_db database")
    );
    
    db.query(`DROP DATABASE IF EXISTS business_db;`, (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
    });
    
    db.query(`CREATE DATABASE business_db;`, (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
    });
}

module.exports = {startDB};