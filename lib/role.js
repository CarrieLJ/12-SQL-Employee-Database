class Role {
    constructor(id, title, salary) {
      this.id = id;
      this.title = title;
      this.salar = salary;
    }
  
    getId() {
      return this.id;
    }
    getTitle() {
      return this.title;
    }
    getSalary() {
      return this.Salary;
    }
    getRole() {
      return "Role";
    }
  }
  
  module.exports = Role;