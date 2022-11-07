const inquirer = require("inquirer");


class Employee {
    constructor(name, id, email) {
        this.name = name
        this.is = id
        this.email = email
    }

    getName() {
       inquirer
       .prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name?"
        }
       ])
       .then(val => {
        val.name = this.name
        return this.name
       });
       this.getId()
    }

    getId() {
        inquirer
       .prompt([
        {
            type: "input",
            name: "id",
            message: "What is the id?"
        }
       ])
       .then(val => {
        val.id = this.id
        return this.id
       });
       this.getEmail()
    }

    getEmail() {
        inquirer
       .prompt([
        {
            type: "input",
            name: "email",
            message: "What is the email?"
        }
       ])
       .then(val => {
        val.email = this.email
        return this.email
       });
       this.getRole
    }

    getRole() {
        return  // returns Employee
    }

}

module.exports = Employee;