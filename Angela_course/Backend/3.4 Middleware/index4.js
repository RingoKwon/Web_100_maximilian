// goal: input-street&&pet; output-bandName
// todos: 1.respons index.html
import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

var fName, lName;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  fName = req.body.street;
  lName = req.body.pet;
  const bandName = fName + lName;
  res.redirect(`/submit?bandName=${bandName}`);
});

app.get("/submit", (req, res) => {
  const bandName = req.query.bandName;
  // Instead of sending static file, send dynamic HTML
  res.send(`
    <h1>Your band name is: </h1>
    <p>${bandName}</p>
    <a href="/">Generate another name</a>
  `);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
