const inquirer = require('inquirer')
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");


inquirer
  .prompt([
    {
    /* Pass your questions in here */
        type: 'input',
        name: 'name',
        message: 'What is your managers name?'
    },
    {
    /* Pass your questions in here */
        type: 'input',
        name: 'ID',
        message: 'What is your managers ID?'
    },
    {
        /* Pass your questions in here */
        type: 'input',
        name: 'office number',
        message: 'What is your managers office number?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your managers email?'
    }

  ])
  .then((response) => {
    console.log(response);

//    FileSystem.writeFile('response.txt', JSON.stringify(response, null,), (err) => err? console.log(err): console.log('Success!'))
    // Use user feedback for... whatever!!
  })
  