const consoleTable = require("console.table");
const mysql = require("mysql2");
// const src = require("")
const fs = require("fs");
const department = require("./lib/department");
const employee = require("./lib/employee");
const role = require("./lib/role");
const { default: inquirer } = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");

const con = mysql.createConnection(
  {host:'localhost', user: 'root', database: 'test'}
);
con.promise().query("SELECT 1")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end());

startQuestions();

function startQuestions() {
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