const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Manager')
const Intern = require('./lib/Intern')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the team managers name?',
      name: 'manager',
    },
    {
      type: 'input',
      message: 'What is the team managers id?',
      name: 'id',
    },
    {
      type: 'input',
      message: 'What is the team managers email?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'officeNumber',
      },
      {
        type: 'list',
        message: 'Who else do you want to add?',
        choices : ["Engineer","Intern"],
        name: 'addEmp',
      },
      ])
      .then((answers) => {
        if (answers.addEmp === "Engineer"){
           new Employee(Engineer)
        } else if (answers.addEmp === "Intern"){
          new Employee(Intern)
        }
      })

.then((answers) => {
  generateMarkdown(answers);
    const html = ``
    fs.writeFile('index.html',html, (err) =>
  err ? console.error(err) : console.log('Success!')
);
});