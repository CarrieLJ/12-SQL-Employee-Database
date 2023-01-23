const consoleTable = require("console.table");
const mysql = require("mysql2");
// const src = require("")
const fs = require("fs");
const department = require("./lib/department");
const employee = require("./lib/employee");
const role = require("./lib/role");

const con = mysql.createConnection(
  {host:'localhost', user: 'root', database: 'test'}
);
con.promise().query("SELECT 1")
  .then( ([rows,fields]) => {
    console.log(rows);
  })
  .catch(console.log)
  .then( () => con.end());

