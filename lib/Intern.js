const Employee = require('./Employee')
const inquirer = require("inquirer");

class Intern extends Employee {
    constructor(name, id, school) {
        super(name, id, 'email');
        this.school = school
    }

    getSchool() {
        inquirer
       .prompt([
        {
            type: "input",
            name: "school",
            message: "What is the school?"
        }
       ])
       .then(val => {
        val.school = this.school
        return this.school
       });
    }

    getRole() {
        //overriden to return Intern
    }
}

module.exports = Intern