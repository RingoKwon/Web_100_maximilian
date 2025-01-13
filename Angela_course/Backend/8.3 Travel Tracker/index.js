import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "0000",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const result = await db.query("select country_code from public.visited_countries")

const total = result.rowCount
app.get("/", async (req, res) => {
  //Write your code here.
  
  const countries = result.rows.map(row => row.country_code);
  console.log(countries)

  res.render("index.ejs", {
    countries: countries,
    total: total
  })
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
