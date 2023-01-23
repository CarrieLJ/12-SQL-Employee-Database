const cTable = require("console.table");
const mysql = require("mysql2");
// const src = require("")
const fs = require("fs");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
const Department = require("./lib/department");
const Role = require("./lib/role");
const Employee = require("./lib/employee");
const createEmployeeDb = [];

// const con = mysql.createConnection(
//   {host:'localhost', user: 'root', database: 'test'}
// );
// con.promise().query("SELECT 1")
//   .then( ([rows,fields]) => {
//     console.log(rows);
//   })
//   .catch(console.log)
//   .then( () => con.end());

createEmployeeTable();

function createEmployeeTable() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "start",
                message: "What would you like to do?",
                choices: ["View all departments", "View all roles", "View all employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"],
            },
        ])
        .then((userSelection) => {
            switch (userSelection.start) {
                case "View all departments":
                    viewDepartments();
                    break;
                case "View all roles":
                    viewRoles();
                    break;
                case "View all employees":
                    viewEmployees();
                    break;
                case "Add a department":
                    addDepartment();
                    break;
                case "Add a role":
                    addRole();
                    break;
                case "Add an employee":
                    addEmployee();
                    break;
                case "Update an employee role":
                    updateEmployee();
                    break;
                    // default:
                    //     generateTable(employeeDb[0]);
                        
            }
        })
}

// function viewDepartments() {
     //show table
// }

// function viewRoles {
    //show table
// }

// function viewEmployees {
    // show table
// }

function addDepartment() {
    inquirer
        .prompt([
            {
               type: "input",
               name: "department",
                message: "Enter name of new department:",
            },
        ])
        .then((answers) => {
            const department = new Department(
                answers.department,
            );
            createEmployeeDb.push(department);

            createEmployeeTable();
        });
}
function addRole() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "role",
                message: "Adde new role:",
            },
            {
                type: "input",
                name: "salary",
                message: "Enter the salary:",
            },
            {
                //update to choices list?
                type: "input",
                name: "department",
                message: "Enter the department:",
            },
        ])
        .then((answers) => {
            const role = new Role(
                answers.role,
                answers.salary,
                answers.department,
            );
            createEmployeeDb.push(role);

            createEmployeeTable();
        });
}
function addEmployee() {
    inquirer
        .prompt([
            {
                type: "input",
                name: "firstName",
                message: "First name:",
            },
            {
                type: "input",
                name: "lastName",
                message: "Last name:",
            },
            {
                //update to choices?
                type: "input",
                name: "role",
                message: "Which role does this employee have:",
            },
            {
                type: "input",
                name: "manager",
                message: "Who is their manager?",
            },
        ])
        .then((answers) => {
            const employee = new Employee(
                answers.firstName,
                answers.lastName,
                answers.role,
                answers.manager,
            );
            createEmployeeDb.push(employee);

            createEmployeeTable();
        });
}

function updateEmployee() {
    inquirer
        .prompt([
            {
                type: "lsit",
                name: "nameUpdate",
                message: "Which employee would you like to update:",
                choices: [],
            },
        ])
        .then((answers) => {
            const updateEmployee = new updateEmployee(
                answers.nameUpdate,
            );
            createEmployeeDb.push(updateEmployee);

            createEmployeeTable();
        });
}
    
