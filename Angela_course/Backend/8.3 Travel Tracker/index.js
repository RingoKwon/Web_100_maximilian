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

async function start1() {
  const result = await db.query(
    "select country_code from public.visited_countries"
  );

  const total = result.rowCount;
  const countries = result.rows.map((row) => row.country_code);
  console.log(countries);

  return { countries, total };
}

app.get("/", async (req, res) => {
  const { countries, total } = await start1();
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
    const { countries, total } = await start1();
    res.render("index.ejs", {
      error: "no country",
      countries: countries,
      total: total,
    });
    return;
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
    const { countries, total } = await start1();
    res.render("index.ejs", {
      error: "already exist",
      countries: countries,
      total: total,
    });
    return;
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
