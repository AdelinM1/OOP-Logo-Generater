const fs = require('fs');
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./lib/shapes.js');
const colors = require('./lib/colors.js');

// Function to prompt the user for input
function getUserInput() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter characters for the text:',
    },
    {
      type: 'list',
      name: 'textColor',
      message: 'Choose a text color:',
      choices: colors,
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
    {
      type: 'list',
      name: 'shapeColor',
      message: 'Choose a shape color:',
      choices: colors,
    },
  ]);
}

// Function to generate the logo based on user input
function generateLogo(answers) {
  let shape;

  switch (answers.shape) {
    case 'Circle':
      shape = new Circle();
      break;
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Square':
      shape = new Square();
      break;
  }

  shape.setColor(answers.shapeColor);

  const svgContent = shape.render(answers.text, answers.textColor);

  fs.writeFileSync('logo.svg', svgContent);

  console.log('Generated logo.svg');
}

getUserInput().then((answers) => {
  generateLogo(answers);
});