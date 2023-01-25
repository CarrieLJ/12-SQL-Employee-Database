const connection = require('./connection');

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    findDepartments() {
        return this.connection.promise().query('SELECT department.id, department.name FROM department;');
    }
}



module.exports = new DB();