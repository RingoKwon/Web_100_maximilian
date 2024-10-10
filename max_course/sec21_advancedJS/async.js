const fs = require("fs/promises");

async function readFile() {
  let fileData;

  // fs.readFile("data.txt", function(error, fileData){

  //     console.log('File parsing done!');
  //     console.log(fileData.toString());
  // // start another async task that sends the data to a database
  // });
  try { 

      fileData = await fs.readFile("data.txt");
  } catch ( error) { 
    console.log(error)
  }
  // .then(function (fileData) {
  console.log("File parsing doen!");
  console.log(fileData.toString());
  // })

  console.log("Hi there!");
}

readFile();
