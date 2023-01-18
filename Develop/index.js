// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const licenseList = require('spdx-license-list');
const readline = require('readline');

/* const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

rl.question('Type a license name: ', (input) => {
    const filteredLicenses = Object.keys(licenseList).filter(license => license.toLowerCase().includes(input.toLowerCase()));
    rl.close(); */

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'descripcion',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'which License did you use on your project?',
        choices: ["MIT", "apache"],
    },
];

inquirer
    .prompt(questions)
    .then(function(userInput) {
       
        const markdownString =  generateMarkdown(userInput);

        // TODO: Create a function to write README file
        
        fs.writeFile('README.md', markdownString, function(err) {
            if(err) {
                console.log(err)
            }
            else {
                console.log('Look at your spiffy new README!')
            }
        })
    })
/* }) */
    



//TODO: Create a function to initialize app
function init() {}

//Function call to initialize app
init();