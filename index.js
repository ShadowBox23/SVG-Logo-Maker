const inquirer = require('inquirer');

const fs = require('fs');

const { generateSVG } = require('./lib/generateSVG');

const { makeShape } = require('../lib/makeShape');


inquirer 
 .prompt([
    {
        type: 'input',
        name: 'logoName',
        message: 'please enter logo name, must be 3 characters or less',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'please enter text color or a hexadecimal number for the logos text color',
    },
    {
        type: 'input',
        name: 'backgroundColor',
        message: 'please enter background color or a hexadecimal number for the logos background color',   
    },
    {
        type: 'input',
        name: 'logoShape',
        message: 'please choose the shape of the logo',
        choices: ['circle','square', 'triangle'],
    },
])

.then((answers) => {
    const svgPath = './examples/logo.svg';
    const finalLogo = makeShape(answers);

    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
        err? console.log(err) : console.log('successfully created logo.svg')
    );
})

.catch((err) => console.log(err));