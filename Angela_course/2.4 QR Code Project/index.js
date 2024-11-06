/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image"
// var qr = require('qr-image');
import inquirer from 'inquirer';
import fs from "fs" 


inquirer
  .prompt([
    {
      type: 'input',
      name: 'url',
      message: 'Enter the URL you want to convert to QR code:'
    }
  ])
  .then((answers) => {
    // answers.url will contain the user's input
    var qr_img = qr.image(answers.url)
    fs.writeFile("image.txt", qr_img)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });