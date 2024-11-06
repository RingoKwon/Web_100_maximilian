/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import qr from "qr-image"
// var qr = require('qr-image');

var qr_img = qr.image("dd") 
console.log(qr_img)