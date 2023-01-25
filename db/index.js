const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findDepartments() {
        return this.connection.promise().query('SELECT department.id, department.name FROM department;');
        console.log(res);

    }
    findRoles() {
        return this.connection.promise().query('SELECT role.id, role.title, role.salary FROM role;');
    }

    findEmployee() {
        return this.connection.promise().query('SELECT employee.id, employee.first_name, employee.last_name, employee.role_id FROM employee;');
    }
}

module.exports = new DB(connection);