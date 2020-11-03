const inquirer = require("inquirer");
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);
    

     inquirer.prompt([
        {
            type: 'input', 
            name: 'project',
           message: "Please enter name of your project. "
        },
 {
    type: 'input', 
     name: 'github',
    message: "What is your github username? "
},
{
    type: 'input', 
     name: 'email',
    message: "What is your email address?: "
},
{
    type: 'input', 
    name: 'description',
   message: "Please enter a short description of your project. "
},
{
    type: "list",
    name: "license",
    message: "What license would you like?",
    choices: ["None", "MIT", "BSD 3", "Apache 2.0", "GNU"] 
    },
{
    type: 'input', 
    name: 'installation',
   message: "What command should be run to install dependencies? "
},
{
    type: 'input', 
    name: 'toKnow',
   message: "What should the user need to know about using the repo? "
},
{
    type: 'input', 
    name: 'tests',
   message: "What command should be run to run tests?"
},
{
    type: 'input', 
    name: 'contribution',
   message: "What are the contribution guidelines for your project?"
}
]) .then(function (answers) {
    // console.log(answers)
    // const html = generateHTML(answers);
    // console.log(generateHTML(answers))
    let html = `
  # ${answers.project}
   
  # Table of Contents

* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [Contribution](#Contribution)
* [Testing](#Tests)
* [License](#License)
* [Questions](#Questions)

## Description: 
${answers.description}

## Installation:
 ${answers.installation}

## License:
 ${answers.license}

## Usage: 
 ${answers.toKnow}

## Contribution Guidelines:
  ${answers.contribution}

## Test Instructions: 
${answers.tests}

## Questions:
 Contact Me @ github.com/${answers.github} 
 Email: ${answers.email}
`
    fs.writeFileSync('readme.md', html);
})
 




// .then(() => {
//     console.log('successfully wrote index.html');
// })
// .catch(err => console.log(err));
