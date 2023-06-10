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
    type: "input",
    name: "fileName",
    message: "This is a test message",
},

{
    //
},



]).then((data) => {
    console.log("Hello, world");
})
}

module.exports = {startTracker};