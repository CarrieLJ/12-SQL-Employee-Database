class Department {
    constructor(id, name) {
      this.id = id;
      this.name = name;
    }
  
    getId() {
      return this.id;
    }
    getName() {
      return this.name;
    }
    getDepartment() {
      return "Department";
    }
  }
  
  module.exports = Department;