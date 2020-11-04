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
  
    let html = `
  # ${answers.project}


   
## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Testing](#tests)
* [License](#license)
* [Questions](#questions)

## Description
${answers.description}

## Installation
 ${answers.installation}

## Usage
 ${answers.toKnow}

## Contribution
  ${answers.contribution}

## Tests
${answers.tests}

## License
${answers.license}

## Questions
 Contact Me @ github.com/${answers.github} 
 Email: ${answers.email}
`

//  function generateLicenseBadge(answers) {
// if ${answers.license} === 'MIT' { 
//     return ( `([![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)))'
// }
// // function generateLicenseBadge(answers) {
// //      return `# ${answers.license}
// //     ${renderLicenseBadge(answers.license)}
// //  }

// // }
// // else if ${answers.license} = 'BSD 3' {

// // }
// // else if ${answers.license} = 'Apache 2.0' {

// // }
// // else if ${answers.license} = 'GNU' {

// // }

    fs.writeFileSync('readme.md', html);
})
 




// .then(() => {
//     console.log('successfully wrote index.html');
// })
// .catch(err => console.log(err));
