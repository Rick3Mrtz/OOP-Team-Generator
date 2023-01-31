const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager'
    }

    getOfficeNumber() {
        return this.officeNumber
    }

    getId() {
        console.log(`Id: ${this.id}`);
        return this.id;
      }
}



module.exports = Manager;