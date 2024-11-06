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
    // Create QR code image
    var qr_img = qr.image(answers.url);
    // Save QR code as PNG file
    qr_img.pipe(fs.createWriteStream('qr_code.png'));
    
    // Save URL to text file
    fs.writeFile("url.txt", answers.url, (err) => {
      if (err) throw err;
      console.log('URL has been saved!');
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });