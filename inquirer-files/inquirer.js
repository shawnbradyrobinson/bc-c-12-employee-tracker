/*
 * 
 * 
 * 
 * 
 */
const inquirer = require("inquirer");
const addADepartment = require("./add-a-department");
const addARole = require("./add-a-role");
const addAnEmployee = require("./add-an-employee");
const updateAnEmployeeRole = require("./update-an-employee-role");
const viewAllEmployees = require("./view-all-employees");
const viewAllDepartments = require("./view-all-departments");
const viewAllRoles = require("./view-all-roles");
const fs = require("fs");

//maybe these inquirer prompts could be modularized out into separate js files? then they could just be run in this .then depending on what was chosen? 
function startTracker(){
    inquirer
.prompt([
{
    //what would you like to do?
    //view all departments, view all roles, view all employees, add a department, add a role, add an employee, update an employee role 
    type: "list",
    name: "userAction",
    message: "Welcome to the Shawn's Employee Tracker! What would you like to do?",
    choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
}
]).then((data) => {
    switch (data.userAction){
        case "View all departments":
            viewAllDepartments.viewAllDepartments();
         break; 
         //I wonder...when I dive into the sql, is it going to return a data object that then needs to get processed by another .then? 
         case "View all roles":
            viewAllRoles.viewAllRoles();
            break; 

         case "View all employees":
            viewAllEmployees.viewAllEmployees();
            break;

         case "Add a department":
            addADepartment.addADepartment();
            break;

         case "Add a role":
            addARole.addARole();
            break;

         case "Add an employee":
            addAnEmployee.addAnEmployee();
            break;

         case "Update an employee role":
            updateAnEmployeeRole.updateAnEmployeeRole();
            break;    
    }
})
}

module.exports = {startTracker};