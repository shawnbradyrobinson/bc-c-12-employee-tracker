const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

function viewAllEmployees(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
        console.log("Connected to the business_db database")
    );

    db.query(`SELECT * FROM employees;`, (err, result) => {
        if (err){
            console.log(err);
        }
        console.log(result);
    });
}

module.exports = {viewAllEmployees};