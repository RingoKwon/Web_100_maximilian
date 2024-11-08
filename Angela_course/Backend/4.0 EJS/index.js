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

var date = new Date()
var dayOfWeek = date.getDay()

app.get("/", (req, res) => {
    let dayType = "weekday";
    let advice = "it's time to work hard";
    
    if ([0, 6].includes(dayOfWeek)) {
        dayType = "weekend";
        advice = "it's time to relax";
    }
    
    res.render("solution", {
        dayType: dayType,
        advice: advice
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});