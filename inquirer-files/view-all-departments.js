const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");


function viewAllDepartments(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
        console.log("Connected to the business_db database")
    );

    db.query(`SELECT * FROM departments;`, (err, result) => {
        if (err){
            console.log(err);
        }
        console.table(result);
    });
}

module.exports = {viewAllDepartments};