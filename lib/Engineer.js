const Employee = require('./Employee')
const inquirer = require("inquirer");

class Engineer extends Employee {
    constructor(name, id, github) {
        super(name, id, 'email')
        this.github = github
    }

    getGithub() {
        inquirer
       .prompt([
        {
            type: "input",
            name: "github",
            message: "What is the GitHub username?"
        }
       ])
       .then(val => {
        val.github = this.github
       });
    }

    getRole() {
        //overriden to return Engineer
    }
}


const engineer = new Engineer()