const fs = require("fs");
const path = require("path");

const express = require("express");
const uuid = require("uuid");

const resData = require("./util/restaurant-file");
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
  restaurant.id = uuid.v4();
  const restaurants = resData.getStoredRestaurants();

  restaurant.push(restaurant);

  resData.storeRestaurants(restaurants);

  res.redirect("/confirm");
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.get("/confirm", function (req, res) {
  res.render("confirm");
});
app.get("/restaurants", function (req, res) {
  const getStoredRestaurants = resData.getStoredRestaurants();
  res.render("restaurants", {
    numberOfRestaurants: getStoredRestaurants.length,
    restaurants: getStoredRestaurants,
  });
});

app.get("/restaurants/:id", function (req, res) {
  const restaurantId = req.params.id;
  const storeRestaurants = resData.getStoredRestaurants();
  for (const restaurant of storeRestaurants) {
    if (restaurant.id === restaurantId) {
      return res.render("restaurant-detail", { restaurant: restaurant });
    }
    res.status(404).render("404");
  }
});

app.use(function (req, res) {
  res.status(404).render("404");
});

app.use(function (event, req, res, next) {
  res.status(500).render("500");
});
app.listen(3000);
