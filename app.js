const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');
const employee = require("./emloyeeModel");
const PORT = process.env.PORT || 8080;
const connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: PORT,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "employee_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    mainMenu();
});

//inquirer promt questions
const mainMenuQs = [
    {
        name: "what_to_do",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Employees", "View Department", "View Roles", "Add Department", "Add Roles", "Add Employee", "Update Roles", "Update Manager",
            "View Employees by Manager", "Delete Department", "Delete Roles", "Delete Employee", "View Department Salary Budget", "Exit Program"]
    }
];
const addDepartmentQ = [
    {
        name: "addDepartment",
        type: "input",
        message: "What is the name of the department you would like to add?",
    }
];
const addRoleQ = [
    {
        name: "addDepartment",
        type: "input",
        message: "What is the name of the role you would like to add?",
    }
];
const addEmployeeQs = [
    {
        name: "addDepartment",
        type: "input",
        message: "What is the first name of the Employee you would like to add?",
    },
    {
        name: "addDepartment",
        type: "input",
        message: "What is the last name of the Employee you would like to add?",
    }
];
// function that acts as a main hub for menus
function mainMenu() {
    inquirer
        .prompt(mainMenuQs).then(function (answer) {
            switch (answer) {

                case "View Employees":
                    viewEmp();
                    break;

                case "View Department":
                    viewDep();
                    break;

                case "View Roles":
                    viewRole();
                    break;

                case "Add Department":
                    addDep();
                    break;

                case "Add Roles":
                    addRole();
                    break;

                case "Add Employee":
                    addEmp();
                    break;

                case "Update Roles":
                    updateMan();
                    break;

                case "Update Manager":
                    updateMan();
                    break;

                case "View Employees by Manager":
                    empMan();
                    break;

                case "Delete Department":
                    delDep();
                    break;

                case "Delete Roles":
                    delRole();
                    break;

                case "Delete Employee":
                    delEmp();
                    break;

                case "View Department Salary Budget":
                    depSalBudget();
                    break;

                case "Exit Program":
                    connection.end();
                    break;
            }
        });
}


// view employees
viewEmp = () => SELECT first_name, last_name WHERE  
FROM mytable;

// view departments

// view roles

// add departments

// add roles

// add employees

//Bonus Functionallity Below
//update manager

// view employees by manager

// delete departments

// delete roles

// delete employees

// view total amount of salaries in specific department