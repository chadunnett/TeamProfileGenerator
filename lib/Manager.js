const Employee = require('./Employee')
const inquirer = require("inquirer");

class Manager extends Employee {
    constructor(name, id, officeNumber){
        super(name, id, 'email')
        this.officeNumber = officeNumber
    }

    getOffice() {
        inquirer
       .prompt([
        {
            type: "input",
            name: "officeNumber",
            message: "What is the office number?"
        }
       ])
       .then(val => {
        val.officeNumber = this.officeNumber
        return this.officeNumber
       });
    }

    getRole() {
        //override to manager
    }
}


const manager = new Manager()

module.exports = Manager