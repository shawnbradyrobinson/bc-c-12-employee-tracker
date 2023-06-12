const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

function addARole(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
    );
    
    inquirer.prompt([
        {
            type: "list",
            name: "roleChoice",
            choices:["Human Resources",
            "Marketing",
            "Engineering",
            "Finances",
            "Legal",
            "Research and Development"],
            message: "What department would you like to add your role within?"
        },

        {
            type: "input",
            name: "roleTitle",
            message: "What would you like to name your new role?",
        },

        {
            type: "input",
            name: "roleSalary",
            message: "Please enter the salary for this role",
        }
    ]).then((data) => {
        let departmentChoice; 
        switch (data.roleChoice){
            case "Human Resources":
                departmentChoice = "1";
                break;
            case "Marketing":
                departmentChoice = "2"; 
                break;
            case "Engineering":
                departmentChoice = "3"; 
                break;
            case "Finances":
                departmentChoice = "4"; 
                break;
            case "Legal":
                departmentChoice = "5"; 
                break;
            case "Research and Development":
                departmentChoice = "6"; 
                break;
        }
        db.query(`INSERT INTO roles(title, salary, department_id)
        VALUES ("?", ?, ?);`, [data.roleTitle, data.roleSalary, departmentChoice], (err, result) =>{
            if (err){
                console.log(err);
            }
            console.log(result);

        })

        db.query(`SELECT * FROM roles;`, (err, result) => {
            if (err){
                console.log(err);
            }
            console.table(result);
        })



    })



};

module.exports = {addARole};