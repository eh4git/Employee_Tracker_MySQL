const mysql = require("mysql");
const inquirer = require("inquirer");
// const db = require("./db/model");
require('console.table');
// const employee = require("./emloyeeModel");

//const PORT = process.env.PORT || 8080;
const connection = mysql.createConnection({
    host: "localhost",
    // Your username
    user: "root",
    // Your password
    password: "root",
    database: "employee_DB"
});
connection.connect(function (err) {
    // console.log("error: ", err);
    if (err) throw err;
    mainMenu();
});

//inquirer promt questions
const mainMenuQsArr = [
    {
        name: "mainQuestion",
        type: "list",
        message: "What would you like to do?",
        choices: ["View Employees", "View Department", "View Roles", "Add Department", "Add Roles", "Add Employee", "Update Roles", "Exit Program"]
    }
];
const addDepartmentQArr = [
    {
        name: "addDepNameQ",
        type: "Input",
        message: "What is the name of the department you would like to add?",
    }
];

const addRoleQArr = [
    {
        name: "addRoleNameQ",
        type: "input",
        message: "What is the name of the role you would like to add?",
    },
    {
        name: "addRoleSalaryQ",
        type: "input",
        message: "What is the salary of for the role you are adding?",
    },
    {
        name: "addRoleIdQ",
        type: "input",
        message: "What is the id number of the role you are adding?",
    }
];
const addEmployeeQsArr = [
    {
        name: "addEmpFirstNameQ",
        type: "input",
        message: "What is the first name of the Employee you would like to add?",
    },
    {
        name: "addEmpLastNameQ",
        type: "input",
        message: "What is the last name of the Employee you would like to add?",
    },
    {
        name: "addEmpRoleIdQ",
        type: "input",
        message: "What is the role id of the Employee you would like to add?",
    },
    {
        name: "addEmpManagerIdQ",
        type: "input",
        message: "What is the magager id for the Employee you would like to add?",
    }
];
const updateRoleQs =
    [
        {
            name: "updateRoleTitleQ",
            type: "input",
            message: "What is the new title for the role you are updating?",
        },
        {
            name: "updateRolSalaryQ",
            type: "input",
            message: "What is the new salary for the role you are updating?",
        },
        {
            name: "updateRoleDepIdQ",
            type: "input",
            message: "What is the new department id for the role you are updating?",
        }
    ];
// function that acts as a main hub for menus
function mainMenu() {
    inquirer
        .prompt(mainMenuQsArr).then(function (answer) {
            switch (answer.mainQuestion) {

                case "View Employees":
                    viewAll("employee");
                    break;

                case "View Department":
                    viewAll("department");
                    break;

                case "View Roles":
                    viewAll("role");
                    break;

                case "Add Department":
                    // console.log(answer.mainQuestion)
                    addAll(answer.mainQuestion);
                    break;

                case "Add Roles":
                    addAll(answer.mainQuestion);
                    break;

                case "Add Employee":
                    addAll(answer.mainQuestion);
                    break;

                case "Update Roles":
                    updateRole();
                    break;

                // case "Update Manager":
                //     updateManager();
                //     break;

                // case "View Employees by Manager":
                //     empMan();
                //     break;

                // case "Delete Department":
                //     delDep();
                //     break;

                // case "Delete Roles":
                //     delRole();
                //     break;

                // case "Delete Employee":
                //     delEmp();
                //     break;

                // case "View Department Salary Budget":
                //     depSalBudget();
                //     break;

                case "Exit Program":
                    connection.end();
                    break;
            }
        });
}

// view employees & view departments & view roles

viewAll = (table) => {
    connection.query(`SELECT * FROM ${table}`, (err, res) => {
        if (err) throw err;
        console.log("\n");
        console.table(res);
        mainMenu();
    });
}
function addAll(addInfo) {
    // console.log("Inserting a new Department/Role/Employee...\n");
    // console.log("addInfo: "+addInfo)
    switch (addInfo) {
        case "Add Department":
            inquirer.prompt(addDepartmentQArr).then(function (answer) {
                addDep(answer.addDepNameQ);
            });
            break;
        case "Add Roles":
            inquirer.prompt(addRoleQArr).then(function (answer) {
                addRole(answer.addRoleNameQ, answer.addRoleSalaryQ, answer.addRoleIdQ);
            });
            break;
        case "Add Employee":
            inquirer.prompt(addEmployeeQsArr).then(function (answer) {
                console.log("add employee switch case anser: " + answer.addEmpManagerIdQ)
                addEmp(answer.addEmpFirstNameQ, answer.addEmpLastNameQ, answer.addEmpManagerIdQ);
            });
            break;
    };
}
//  answer.addEmpRoleIdQ,
// add departments
function addDep(answer) {
    console.log("addDep Function answer: " + answer);
    connection.query(
        'INSERT INTO department SET ?', { name: answer }, (err, res) => {
            if (err) throw err;
            console.log("\n");
            console.table(res);
            mainMenu();
        });
}

// add roles
function addRole(answer1, answer2, answer3) {
    console.log("addRole Function answers: " + answer1, answer2, answer3);
    connection.query(
        'INSERT INTO role SET ?,?,?', [{ title: answer1 }, { salary: answer2 }, { department_id: answer3 }], (err, res) => {
            if (err) throw err;
            console.log("\n");
            console.table(res);
            mainMenu();
        });
}
// add employees
function addEmp(answer1, answer2, answer3, answer4) {
    console.log("addEmp Function answers: " + answer1, answer2, answer4);
    const employeeQuery = 'INSERT INTO employee SET ?,?,?,?'
    connection.query(
        employeeQuery, [{ first_name: answer1 }, { last_name: answer2 }, { role_id: answer3 }, { manager_id: answer4 }], (err, res) => {
            if (err) throw err;
            console.log("\n");
            console.table(res);
            mainMenu();
        });
}

function updateRole() {
    connection.query("SELECT * FROM role", function (err, req) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "updateRoleSelectQ",
                type: "list",
                message: "What role would you like to update?",
                choices: function () {
                    const updateRoleChoices = [];
                    for (let i = 0; i < req.length; i++) {
                        updateRoleChoices.push(req[i].title);
                    }
                    console.log("updateRoleChoices: "+updateRoleChoices)
                    return updateRoleChoices;
                }
            }
        ])
            .then(function (answer) {
                let role = answer.updateRoleSelectQ;
                console.log("update role .then answer: " + answer.updateRoleSelectQ)
                inquirer.prompt(updateRoleQs).then(function (answer) {
                    connection.query("UPDATE role SET title = ?, salary = ?, department_id = ? WHERE title = ?", [answer.updateRoleTitleQ, answer.updateRolSalaryQ, answer.updateRoleDepIdQ, role], function (err, res) {
                        if (err) throw err;
                        console.log("\n");
                        console.table(res);
                        mainMenu();
                    });
                });
            });
    });
}





//Bonus Functionallity Below
//update manager

// view employees by manager

// delete departments

// delete roles

// delete employees

// view total amount of salaries in specific department

