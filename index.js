const cTable = require("console.table");
const Table = require("easy-table");
const mysql = require("mysql2");
const express = require("express");
const path = require("path");
// const src = require("")
// const fs = require("fs");
const inquirer = require("inquirer");
const { allowedNodeEnvironmentFlags } = require("process");
const Department = require("./lib/department");
const Role = require("./lib/role");
const Employee = require("./lib/employee");
const createEmployeeDb = [];
// const schema = require("./db/schema.sql");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const con = mysql.createConnection(
    {host:'localhost', 
    user: 'root', 
    database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);
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

function viewDepartments() {
    // app.post('/api/department', ({ body }, res) => {
    //     const departmentSql = `INSERT INTO department (name)
    //       VALUES (?)`;
    //     const params = [body.name];
        
    //     db.departmentQuery(sql, params, (err, result) => {
    //       if (err) {
    //         res.status(400).json({ error: err.message });
    //         return;
    //       }
    //       res.json({
    //         message: 'success',
    //         data: body
    //       });
    //     });
    //   });
      

    con.query('SELECT * FROM department', function (err, results) {
        // console.table(['department.id', 'department.name'], ('./db/seeds'));
    });
};

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
    
