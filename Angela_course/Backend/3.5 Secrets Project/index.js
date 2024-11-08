//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var userIsAuth = false; 
var pw;

app.use(bodyParser.urlencoded({ extended: true }));

function checkPw(req, res, next) {
  const pw = req.body["password"];
  if ( pw === "aa"){
    userIsAuth = true ; 
  }
  next()

}
app.use(checkPw);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  pw = req.body["password"];
  if (userIsAuth) {
    res.sendFile(__dirname + "/public/secret.html");
  }else { 
    res.sendFile(__dirname + "/public/index.html"); 
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
