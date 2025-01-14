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

let currentUserId = 1;

const result = await db.query("select * from users");

let users = result.rows;

async function checkVisisted(user_id = 1) {
  // user-id 가 있는 경우에는
  const result = await db.query(
    "SELECT country_code FROM visited_countries where user_id = $1",
    [user_id]
  );
  let countries = [];
  result.rows.forEach((country) => {
    countries.push(country.country_code);
  });
  const colorResult = await db.query("select color from users where id = $1", [
    user_id,
  ]);
  const color = colorResult.rows[0].color;
  console.log(countries, color, user_id);
  return { countries, color };
}
app.get("/", async (req, res) => {
  const { countries, color } = await checkVisisted(currentUserId);
  res.render("index.ejs", {
    countries: countries,
    total: countries.length,
    users: users,
    color: color,
  });
});
app.post("/add", async (req, res) => {
  const input = req.body["country"];

  try {
    const result = await db.query(
      "SELECT country_code FROM countries WHERE LOWER(country_name) LIKE '%' || $1 || '%';",
      [input.toLowerCase()]
    );

    const data = result.rows[0];
    const countryCode = data.country_code;
    try {
      await db.query(
        "INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2)",
        [countryCode, currentUserId]
      );
      res.redirect("/");
    } catch (err) {
      console.log(err);
    }
  } catch (err) {
    console.log(err);
  }
});
app.post("/user", async (req, res) => {
  console.log(req.body);
  const user_id = req.body.user;
  currentUserId = user_id;
  const newVar = req.body.add;
  if (newVar === "new") {
    console.log(1);
    res.render("new.ejs", {});
  } else {
    const { countries, color } = await checkVisisted(currentUserId);
    // console.log("countries: ", countries);
    res.render("index.ejs", {
      countries: countries,
      total: countries.length,
      users: users,
      color: color,
    });
  }

  // const hello = 3;
  // const hello1 = 3;
  // console.log('hello:', hello + hello1);
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  console.log(req.body);
  const name = req.body.name;
  const color = req.body.color;
  const result = db.query("insert into users (name , color) values ($1, $2)", [
    name,
    color,
  ]);
  res.redirect("/");
  const result2 = await db.query("select * from users");

  users = result2.rows;
  console.log("updated");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
