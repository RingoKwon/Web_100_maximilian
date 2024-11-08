import express from "express";
const app = express();

app.set('view engine', 'ejs');  // This line must come BEFORE routes

app.get("/", (req, res) => {
  res.render("index", {
    data: {
      title: "Your Title Here"
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
}); 