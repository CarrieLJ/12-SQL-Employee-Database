class Employee {
    constructor(id, first, last) {
      this.id = id;
      this.first = first;
      this.last = last;
    }
  
    getId() {
      return this.id;
    }
    getFirst() {
      return this.first;
    }
    getLast() {
      return this.last;
    }
    getEmployee() {
      return "Employee";
    }
  }
  
  module.exports = Employee;