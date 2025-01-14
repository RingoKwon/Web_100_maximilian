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


app.get("/", async (req, res) => {
  const result = await db.query(
    "select country_code from public.visited_countries"
  );
  
  const total = result.rowCount;
  //Write your code here.

  const countries = result.rows.map((row) => row.country_code);
  console.log(countries);

  res.render("index.ejs", {
    countries: countries,
    total: total,
  });
});


app.post("/add", async (req, res) => {
  const countryName = req.body.country;
  let countryCode;
  try {
    const result = await db.query(
      `select country_code from public.countries where country_name = '${countryName}'`
    );
    countryCode = result.rows[0].country_code;
  } catch (e) {
    console.error("error", e);
  }
  console.log(countryCode);
  console.log(countryName);
  const query = {
    text: "INSERT INTO visited_countries (country_code) VALUES($1)",
    values: [countryCode],
  };

  try {
    const result = await db.query(query);
    console.log("Insert successful");
  } catch (err) {
    console.error("Error executing query", err);
  }
  res.redirect("/");
});

console.log("---"); /// dedugging

// 서버 종료 시 데이터베이스 연결 종료
process.on("exit", async () => {
  await db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
