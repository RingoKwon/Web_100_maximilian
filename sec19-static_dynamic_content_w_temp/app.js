const fs = require("fs");
const path = require("path");

const express = require("express");

app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/recommend", function (req, res) {
  res.render("recommend");
});
app.post("/recommend", function (req, res) {
  const restaurant = req.body;
  const filePath = path.join(__dirname, "data", "restaurant.json");

  const fileData = fs.readFileSync(filePath);
  const storeRestaurants = JSON.parse(fileData);

  storeRestaurants.push(restaurant);

  fs.writeFileSync(filePath, JSON.stringify(storeRestaurants));

  res.redirect("/confirm");
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/confirm", function (req, res) {
  res.render("confirm");
});
app.get("/restaurants", function (req, res) {
  const filePath = path.join(__dirname, "data", "restaurant.json");

  const fileData = fs.readFileSync(filePath);
  const storeRestaurants = JSON.parse(fileData);
  res.render("restaurants", {
    numberOfRestaurants: storeRestaurants.length,
    restaurants: storeRestaurants,
  });
});

app.get('/restaurants/:id', function(req,res){
    const restaurantId = req.params.id
    res.render('restaurant-detail', {rid:restaurantId})
})

app.listen(3000);
