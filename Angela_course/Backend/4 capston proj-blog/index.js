import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/post", (req, res) => {
    const post = {
        title: "새 글 작성",
    };
    res.render("posting.ejs", { post: post });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
