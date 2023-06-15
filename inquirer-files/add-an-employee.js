const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");


function addAnEmployee(){
    const db = mysql.createConnection(
        {
            user: "root",
            password: "password",
            database: "business_db"
        },
    );

    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "please write the employee's first name",
        },
        
        {
            type: "input",
            name: "lastName",
            message: "please write the employee's last name",
        },
        
        {
            type: "list",
            name: "roleChoice",
            message: "please choose the role the employee will have",
            choices: ["Marketing Lead","Marketing Team Member","Engineer III", "Engineer II", "Engineer I", "Benefits", "Accountant", "Talent Acquistion", "Account Manager", "Legal Team Lead", "Lawyer", "Paralegal","Research Team Lead", "Researcher"]
        },



    ]).then((data) => {
        let id; 
        switch(data.roleChoice){
            case "Marketing Lead":
                id = 1; 
                break;
            
            case "Marketing Team Member":
                id = 2; 
                break;

            case "Engineer III":
                id = 3; 
                break;

            case "Engineer II":
                id = 4; 
                break;
            case "Engineer I":
                id = 5; 
                break;
                
            case "Benefits":
                id = 6; 
                break;
            
            case "Accountant":
                id = 7;
                break;
            case "Talent Acquistion":
                id = 8; 
                break;
            
            case "Account Manager":
                id = 9; 
                break;
            
            case "Legal Team Lead":
                id = 10; 
                break;
            
            case "Lawyer":
                id = 11; 
                break;
            
            case "Paralegal":
                id = 12; 
                break;

            case "Research Team Lead":
                id = 13; 
                break;
            
            case "Researcher":
                id = 14; 
                break;
        }

        db.query(`INSERT INTO employees(firstname, lastname, role_id)
        VALUES ("?", ?, ?);`, [data.firstName, data.lastName, id], (err, result) =>{
            if (err){
                console.log(err);
            }
            console.log(result);

        })

        db.query(`SELECT * FROM employees;`, (err, result) => {
            if (err){
                console.log(err);
            }
            console.table(result);
        })

    })
};

module.exports = {addAnEmployee};