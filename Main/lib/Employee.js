class Employee {
    
    constructor(name, id, email,) {
      this.name = name;
      this.id = id;
      this.email = email;
      
    }
//   do this for id email, id, and role
    getName() {
      console.log(`Name: ${this.name}`);
    return this.name;
    }

    getId() {
      console.log(`Id: ${this.id}`);
      return this.id;
    }

    getEmail() {
      console.log(`Email: ${this.name}`);
      return this.email
    }

    getRole() {
      console.log(`Role: ${this.role}`);
      return "Employee";
    }
  }
  



  module.exports = Employee;