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
    choices: ["MIT", "BSD 3", "Apache 2.0", "GNU"] 
    },
{
    type: 'input', 
    name: 'dependencies',
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
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
            body {
                font-family: 'Open Sans Condensed', sans-serif;
                background-color: grey;
                color: black;
            }
            #tableOfContents {
                text-align: center;
            }
            #description {
                text-align: center;
            }
            h1 {
                text-align: center;
            }
             #bodyInfo{
                text-align: left;
            }
        </style>
    </head>
    <body>
        <h1>${answers.project}</h1><br>
        <div id='description'>
        <h2>Project Description: </h2><h3>${answers.description}</h3><br>
        </div>  
    
        <div id=tableOfContents>
        <h1>Table of Contents </h1>
            <p>
            <a id="installation">Installation</a><br>
            <a id="license">License</a><br>
            <a id="usage">Usage</a><br>
            <a id="contribution">Contribution</a><br>
            <a id="tests">Test Installation</a><br>
            <a id="contact">Contact Me/Questions</a><br><br>
        </p>
    </div>
    
    <div id='bodyInfo'>
        <h2 id="installation">Installation: ${answers.installation}</h2><br>
        <h2 id="license">License: ${answers.license}</h2><br>
        <h2 id='usage'>Usage: ${answers.toKnow}</h2><br>
        <h2 id='contribution'>Contribution Guidelines: ${answers.contribution}</h2><br>
        <h2 id='tests'>Test Instructions: ${answers.tests}</h2><br>
        <p id='contact'>Questions? Contact Me @ <a href="github.com/${answers.github}">My Github Profile</a><br> Email: ${answers.email}</p>
    </div>
    </body>
    </html>`
    fs.writeFileSync('readme.md', html);
})
 




// .then(() => {
//     console.log('successfully wrote index.html');
// })
// .catch(err => console.log(err));
