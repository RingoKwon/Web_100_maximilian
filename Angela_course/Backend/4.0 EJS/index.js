import express from "express";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("solution", {
        dayType: "Monday",
        advice: "it's time to work hard"
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});