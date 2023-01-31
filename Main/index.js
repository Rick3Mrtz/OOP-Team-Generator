const genHTML = require('./src/generateHTML');

const inquirer = require('inquirer')
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const fs = require('fs');

const teamArray = [];

const addManager = () => {
return inquirer
  .prompt([
    {
    /* Pass your questions in here */
        type: 'input',
        name: 'name',
        message: 'What is your managers name?',
        validate: nameInput => {
          if (nameInput) {
              return true;
          } else {
              console.log ("Please enter the manager's name!");
              return false; 
          }
      }
    },
    {
    /* Pass your questions in here */
        type: 'input',
        name: 'ID',
        message: 'What is your managers ID?',
        validate: nameInput => {
          if  (isNaN(nameInput)) {
              console.log ("Please enter the manager's ID!")
              return false; 
          } else {
              return true;
          }
      }
    },
    {
        /* Pass your questions in here */
        type: 'input',
        name: 'office number',
        message: 'What is your managers office number?',
        validate: nameInput => {
          if  (isNaN(nameInput)) {
              console.log (" Please enter the office number")
              return false; 
          } else {
              return true;
          }
      }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your managers email?',
        validate: email => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
          if (valid) {
              return true;
          } else {
              console.log ('Please enter an email!')
              return false; 
          }
      } 
    }

  ])
  .then(managerInput => {
    const  { name, id, email, officeNumber } = managerInput; 
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager); 
    console.log(manager); 
})
};

const addEmployee = () => {

  return inquirer.prompt ([
      {
          type: 'list',
          name: 'role',
          message: "Choose your employee's role",
          choices: ['Engineer', 'Intern']
      },
      {
          type: 'input',
          name: 'name',
          message: "What's the name of the employee?", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter an employee's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter employee's ID.",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("Please enter employee's ID!")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter employee's email.",
          validate: email => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log ('Please enter an email')
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'github',
          message: "Please enter employee's github username.",
          when: (input) => input.role === "Engineer",
          validate: nameInput => {
              if (nameInput ) {
                  return true;
              } else {
                  console.log ("Please enter employee's github username")
              }
          }
      },
      {
          type: 'input',
          name: 'school',
          message: "Please enter the intern's school",
          when: (input) => input.role === "Intern",
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the intern's school!")
              }
          }
      },
      {
          type: 'confirm',
          name: 'confirmAddEmployee',
          message: 'Would you like to add more team members?',
          default: false
      }
  ])
  .then(employeeData => {
      // data for employee types 

      let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
      let employee; 

      if (role === "Engineer") {
          employee = new Engineer (name, id, email, github);

          console.log(employee);

      } else if (role === "Intern") {
          employee = new Intern (name, id, email, school);

          console.log(employee);
      }

      teamArray.push(employee); 

      if (confirmAddEmployee) {
          return addEmployee(teamArray); 
      } else {
          return teamArray;
      }
  })

};


// function to generate HTML page file using file system 
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      // for errors
      if (err) {
          console.log(err);
          return;
      // once profile has been created 
      } else {
          console.log("Your team profile is now complete! Check out the index.html")
      }
  })
}; 

addManager()
.then(addEmployee)
.then(teamArray => {
  return generateHTML(teamArray);
})
.then(pageHTML => {
  return writeFile(pageHTML);
})
.catch(err => {
console.log(err);
});




//    FileSystem.writeFile('response.txt', JSON.stringify(response, null,), (err) => err? console.log(err): console.log('Success!'))
    // Use user feedback for... whatever!!

  