const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

function addADepartment(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
        console.log("Connected to the business_db database")
    );
    
    inquirer
    .prompt([
        {
            //what would you like to do?
            //view all departments, view all roles, view all employees, add a department, add a role, add an employee, update an employee role 
            type: "input",
            name: "newDepartmentName",
            message: "What do you want to call the new department?"
        }
        ]).then((data) => {
        db.query(`INSERT INTO departments (name)
        VALUES (" ? ");`, data.newDepartmentName, (err, result) => {
        if (err){
            console.log(err);
        }
        console.table(result);
         });
         db.query(`SELECT * FROM departments`, (err, result) => {
         if (err){
             console.log(err);
         }
         console.log(result);
          });



    }) 
};

module.exports = {addADepartment};