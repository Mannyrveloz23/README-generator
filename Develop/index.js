// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do I install this application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do I use this application?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How do I contribute to this application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do I test this application?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project',
        choices: ["Apache 2.0 License", "Boost Software License 1.0", "BSD 3-Clause License", "BSD 2-Clause License", "Eclipse Public License 1.0", "The MIT License", "none"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'type the repository link of your project'
    }
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

    



//TODO: Create a function to initialize app
function init() {}

//Function call to initialize app
init();