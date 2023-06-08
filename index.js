// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');



// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description for your project',
    },
    {
        type: 'list',
        name: 'licence',
        message: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your projecr?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'How do you test your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know when using the repo?',
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What does the user need to know about constributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
